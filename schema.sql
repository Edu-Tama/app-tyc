-- ============================================================================
-- App T&C — Esquema de datos (Supabase / PostgreSQL)
-- v0.1 — 15/08/2026
--
-- Diseñado para DOS usuarios (Cristina y Tama) que comparten el hogar:
-- las recetas, la compra y la despensa son COMPARTIDAS (nivel "hogar"),
-- mientras que peso, adherencia, entrenamientos y analíticas son PERSONALES.
--
-- Ejecutar en el SQL Editor de Supabase de una sola vez.
-- ============================================================================

create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ============================================================================
-- 1. HOGAR Y PERFILES
-- ============================================================================

create table households (
  id            uuid primary key default gen_random_uuid(),
  nombre        text not null,
  -- presupuesto mensual de alimentación, en euros
  presupuesto_mensual numeric(8,2) default 225.00,
  created_at    timestamptz not null default now()
);

create type sexo_t as enum ('mujer', 'hombre');
create type estado_objetivo_t as enum (
  'perdida_peso',        -- déficit controlado
  'mantenimiento',
  'recomposicion',       -- bajar grasa manteniendo peso
  'embarazo'             -- desactiva todo déficit (ver propuesta, punto A)
);

create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  household_id  uuid not null references households(id) on delete cascade,
  nombre        text not null,
  sexo          sexo_t not null,
  fecha_nacimiento date not null,
  altura_cm     numeric(5,1) not null,
  estado        estado_objetivo_t not null default 'mantenimiento',
  -- Rango de trabajo (ver punto 9 de la propuesta). Nunca un número único.
  kcal_min      integer,
  kcal_max      integer,
  kcal_suelo    integer,          -- suelo de seguridad, no se cruza jamás
  proteina_min_g integer,
  -- true cuando el rango lo ha pautado un profesional sanitario
  pautado_por_profesional boolean not null default false,
  -- ritmo máximo de pérdida admitido, en % de peso corporal por semana
  ritmo_max_pct_semana numeric(3,2) default 1.20,
  created_at    timestamptz not null default now()
);

-- Aversiones y restricciones: p. ej. Cristina / judías verdes / solo en crema
create table food_dislikes (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  ingrediente   text not null,
  -- 'prohibido' | 'solo_si_triturado' | 'evitar_si_posible'
  nivel         text not null default 'prohibido',
  nota          text
);

-- Disponibilidad real: horarios de trabajo, entrenos que imparte, etc.
-- El planificador NO debe proponer nada fuera de estos huecos.
create table availability_slots (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  dia_semana    smallint not null check (dia_semana between 1 and 7),
  hora_inicio   time not null,
  hora_fin      time not null,
  -- 'trabajo' | 'entreno_imparte' | 'desplazamiento' | 'libre_deporte'
  tipo          text not null,
  nota          text
);

-- ============================================================================
-- 2. INGREDIENTES, PRODUCTOS Y RECETAS
-- ============================================================================

create table ingredients (
  id            uuid primary key default gen_random_uuid(),
  nombre        text not null unique,
  categoria     text not null,          -- proteina | verdura | fruta | cereal | lacteo | grasa | despensa
  -- sección de Mercadona, para ordenar la lista de la compra por pasillo
  seccion_super text,
  unidad_base   text not null default 'g',   -- g | ml | ud
  kcal_100      numeric(6,1),
  proteina_100  numeric(5,1),
  carbos_100    numeric(5,1),
  grasa_100     numeric(5,1),
  fibra_100     numeric(5,1),
  -- índice glucémico orientativo: relevante para el perfil de Cristina
  ig_orientativo smallint,
  precio_ref_kg numeric(7,2),           -- precio de referencia por kg/l/ud
  precio_actualizado_at timestamptz,
  congelable    boolean default false
);

-- Productos concretos de Mercadona tal y como aparecen en el ticket.
-- Resuelve el peaje de mapeo descrito en el punto 7.4 de la propuesta.
create table products (
  id            uuid primary key default gen_random_uuid(),
  ingredient_id uuid references ingredients(id) on delete set null,
  nombre_comercial text not null,
  formato_g     numeric(8,1),           -- gramos por envase
  precio_ud     numeric(7,2),
  created_at    timestamptz not null default now()
);

-- Cada alias visto en un ticket ("PECH POLLO FIL") se aprende una sola vez.
create table product_aliases (
  id            uuid primary key default gen_random_uuid(),
  product_id    uuid not null references products(id) on delete cascade,
  alias_ticket  text not null unique,
  confirmado    boolean not null default false,
  created_at    timestamptz not null default now()
);

create type metodo_t as enum ('sarten','horno','airfryer','thermomix','olla','crudo','microondas');

create table recipes (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  nombre        text not null,
  -- momento del día en el que encaja: array de 'desayuno','comida','cena','snack'
  momentos      text[] not null default '{comida,cena}',
  metodo        metodo_t[] not null default '{sarten}',
  min_activos   smallint not null,      -- tiempo de trabajo real
  min_totales   smallint not null,
  raciones_base smallint not null default 2,
  -- CRÍTICAS para el planificador (ver punto C de la propuesta)
  aguanta_tupper_dias smallint not null default 0,   -- 0 = no apta para tupper
  congelable    boolean not null default false,
  apta_batch    boolean not null default false,      -- cocinable el domingo en tanda
  lista_en_min  smallint,               -- min. para servir si ya está cocinada
  meses         smallint[] not null default '{1,2,3,4,5,6,7,8,9,10,11,12}',  -- temporada
  instrucciones text,
  notas         text,
  activa        boolean not null default true,
  created_at    timestamptz not null default now()
);

-- CORRECCIÓN v0.2: cada ingrediente escala a su manera.
-- 'proporcional' → ×factor, redondeo a 5 g   (pollo, arroz, legumbre)
-- 'unidad'       → ×factor, unidades enteras (huevos, latas, piezas de fruta)
-- 'fijo'         → NO escala                 (aceite, especias, vinagre, ajo)
create type escalado_t as enum ('proporcional','unidad','fijo');

create table recipe_ingredients (
  id            uuid primary key default gen_random_uuid(),
  recipe_id     uuid not null references recipes(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete restrict,
  -- cantidad para UNA ración de referencia; el planificador escala por persona
  cantidad      numeric(8,1) not null,
  unidad        text not null default 'g',
  escalado      escalado_t not null default 'proporcional',
  opcional      boolean not null default false
);

-- Vista de apoyo: kcal, macros y coste por ración de cada receta.
create view recipe_nutrition as
select
  r.id as recipe_id,
  r.nombre,
  round(sum(ri.cantidad * i.kcal_100     / 100.0) / r.raciones_base, 1) as kcal_racion,
  round(sum(ri.cantidad * i.proteina_100 / 100.0) / r.raciones_base, 1) as proteina_racion,
  round(sum(ri.cantidad * i.carbos_100   / 100.0) / r.raciones_base, 1) as carbos_racion,
  round(sum(ri.cantidad * i.grasa_100    / 100.0) / r.raciones_base, 1) as grasa_racion,
  round(sum(ri.cantidad * i.precio_ref_kg/ 1000.0) / r.raciones_base, 2) as coste_racion
from recipes r
join recipe_ingredients ri on ri.recipe_id = r.id
join ingredients i on i.id = ri.ingredient_id
group by r.id, r.nombre, r.raciones_base;

-- ============================================================================
-- 3. PLANIFICADOR SEMANAL Y REGISTRO DE COMIDAS
-- ============================================================================

create type momento_t as enum ('desayuno','media_manana','comida','merienda','cena');
create type lugar_t   as enum ('casa','tupper_oficina','fuera');

create table meal_plans (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  semana_inicio date not null,          -- siempre un lunes
  confirmado    boolean not null default false,
  created_at    timestamptz not null default now(),
  unique (household_id, semana_inicio)
);

-- Una fila por persona/día/momento: misma receta, gramaje distinto.
create table planned_meals (
  id            uuid primary key default gen_random_uuid(),
  meal_plan_id  uuid not null references meal_plans(id) on delete cascade,
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  momento       momento_t not null,
  recipe_id     uuid references recipes(id) on delete set null,
  raciones      numeric(3,2) not null default 1.00,   -- el gramaje personalizado
  lugar         lugar_t not null default 'casa',
  -- true si sale de la tanda de cocina del domingo
  desde_batch   boolean not null default false,
  unique (profile_id, fecha, momento)
);

create type estado_comida_t as enum ('hecho','cambiado','fuera','saltado','sin_registrar');
create type porcion_fuera_t as enum ('ligero','normal','copioso');

-- Registro por CONFIRMACIÓN: 1 toque en el caso normal.
create table meal_logs (
  id            uuid primary key default gen_random_uuid(),
  planned_meal_id uuid references planned_meals(id) on delete set null,
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  momento       momento_t not null,
  estado        estado_comida_t not null,
  -- solo si estado = 'cambiado'
  recipe_alt_id uuid references recipes(id) on delete set null,
  -- solo si estado = 'fuera': estimación gruesa, nunca gramos
  porcion_fuera porcion_fuera_t,
  hubo_alcohol  boolean,
  registrado_at timestamptz not null default now(),
  unique (profile_id, fecha, momento)
);

-- Adherencia semanal: la métrica que se muestra. Nunca se puntúa el día.
create view adherencia_semanal as
select
  profile_id,
  date_trunc('week', fecha)::date as semana,
  count(*) filter (where estado in ('hecho','cambiado')) as cumplidas,
  count(*) as total,
  round(100.0 * count(*) filter (where estado in ('hecho','cambiado')) / nullif(count(*),0), 0) as pct
from meal_logs
group by profile_id, date_trunc('week', fecha);

-- ============================================================================
-- 4. LISTA DE LA COMPRA Y DESPENSA
-- ============================================================================

create table shopping_lists (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  meal_plan_id  uuid references meal_plans(id) on delete set null,
  fecha         date not null default current_date,
  coste_estimado numeric(8,2),
  cerrada       boolean not null default false
);

create table shopping_items (
  id            uuid primary key default gen_random_uuid(),
  shopping_list_id uuid not null references shopping_lists(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete restrict,
  cantidad      numeric(8,1) not null,   -- ya restado el stock disponible
  unidad        text not null default 'g',
  seccion_super text,                    -- desnormalizado para ordenar offline
  comprado      boolean not null default false
);

create table pantry (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete cascade,
  cantidad      numeric(9,1) not null default 0,
  unidad        text not null default 'g',
  caducidad     date,
  -- solo los ~30 básicos entran en el ajuste manual mensual
  es_basico     boolean not null default false,
  actualizado_at timestamptz not null default now(),
  unique (household_id, ingredient_id, caducidad)
);

-- Trazabilidad de entradas y salidas de despensa (para auditar desviaciones)
create table pantry_movements (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete cascade,
  cantidad      numeric(9,1) not null,   -- positivo = entra, negativo = sale
  -- 'ticket' | 'comida' | 'ajuste_mensual' | 'caducado'
  origen        text not null,
  referencia_id uuid,
  fecha         timestamptz not null default now()
);

-- ============================================================================
-- 5. TICKETS (foto → OCR → gasto + entradas de despensa)
-- ============================================================================

create table tickets (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  fecha_compra  date not null,
  comercio      text not null default 'Mercadona',
  total         numeric(8,2),
  imagen_path   text,                    -- Supabase Storage
  -- 'pendiente' | 'leido' | 'confirmado' | 'error'
  estado        text not null default 'pendiente',
  created_at    timestamptz not null default now()
);

create table ticket_lines (
  id            uuid primary key default gen_random_uuid(),
  ticket_id     uuid not null references tickets(id) on delete cascade,
  texto_ocr     text not null,           -- "PECH POLLO FIL"
  product_id    uuid references products(id) on delete set null,
  cantidad      numeric(8,2),
  importe       numeric(8,2),
  -- false mientras el alias no esté resuelto: la app pregunta una sola vez
  mapeado       boolean not null default false
);

-- ============================================================================
-- 6. DEPORTE
-- ============================================================================

create type patron_t as enum (
  'empuje_horizontal','empuje_vertical','traccion_horizontal','traccion_vertical',
  'sentadilla','bisagra_cadera','zancada','core','cardio','movilidad'
);
create type medida_t as enum ('series_reps','tiempo','distancia','intervalos');

create table exercises (
  id            uuid primary key default gen_random_uuid(),
  nombre        text not null unique,
  patron        patron_t not null,
  medida        medida_t not null default 'series_reps',
  material      text[],                  -- {mancuernas,banda,barra,maquina,ninguno}
  en_casa       boolean not null default false,
  video_url     text,
  notas_tecnica text
);

create table routines (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  nombre        text not null,
  objetivo      text,                    -- 'fuerza_deficit' | 'recomposicion' | ...
  semanas       smallint not null default 8,
  fecha_inicio  date,
  activa        boolean not null default true
);

create table routine_sessions (
  id            uuid primary key default gen_random_uuid(),
  routine_id    uuid not null references routines(id) on delete cascade,
  nombre        text not null,           -- "Fuerza A — tren inferior"
  orden         smallint not null,
  min_estimados smallint,
  -- día sugerido; el planificador lo cruza con availability_slots
  dia_sugerido  smallint check (dia_sugerido between 1 and 7)
);

create table session_exercises (
  id            uuid primary key default gen_random_uuid(),
  routine_session_id uuid not null references routine_sessions(id) on delete cascade,
  exercise_id   uuid not null references exercises(id) on delete restrict,
  orden         smallint not null,
  series        smallint,
  reps_min      smallint,
  reps_max      smallint,
  peso_kg       numeric(6,2),            -- prescrito; se autoajusta con la progresión
  distancia_km  numeric(6,2),
  tiempo_min    smallint,
  descanso_seg  smallint default 90,
  notas         text
);

create type estado_sesion_t as enum ('hecha','cambiada','no_pude');
create type motivo_fallo_t  as enum ('tiempo','cansancio','imprevisto','molestia_fisica');

create table workout_logs (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  routine_session_id uuid references routine_sessions(id) on delete set null,
  fecha         date not null,
  estado        estado_sesion_t not null,
  motivo_fallo  motivo_fallo_t,          -- lo que permite al planificador aprender
  rpe           smallint check (rpe between 1 and 10),
  min_reales    smallint,
  notas         text
);

create table set_logs (
  id            uuid primary key default gen_random_uuid(),
  workout_log_id uuid not null references workout_logs(id) on delete cascade,
  session_exercise_id uuid references session_exercises(id) on delete set null,
  serie_num     smallint not null,
  reps          smallint,
  peso_kg       numeric(6,2),
  distancia_km  numeric(6,2),
  tiempo_seg    integer,
  completada    boolean not null default true
);

-- Actividad NO programada: spinning 45 min, partido, paseo largo…
create table unplanned_activities (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  tipo          text not null,           -- 'spinning' | 'partido' | 'bici' | 'paseo'…
  duracion_min  smallint not null,
  intensidad    text not null default 'normal',   -- suave | normal | alta
  -- CLAVE: entrenar a un equipo NO es entrenar. Si es trabajo, no computa igual.
  es_actividad_profesional boolean not null default false,
  notas         text
);

-- ============================================================================
-- 7. SALUD Y SEGUIMIENTO
-- ============================================================================

create table weight_logs (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  peso_kg       numeric(5,2) not null,
  unique (profile_id, fecha)
);

-- Media móvil de 7 días: es lo ÚNICO que debe mostrar la interfaz.
create view peso_media_7d as
select
  profile_id,
  fecha,
  peso_kg,
  round(avg(peso_kg) over (
    partition by profile_id order by fecha
    range between interval '6 days' preceding and current row
  )::numeric, 2) as media_7d
from weight_logs;

create table measurements (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  cintura_cm    numeric(5,1),
  cadera_cm     numeric(5,1),
  pct_grasa     numeric(4,1),
  unique (profile_id, fecha)
);

create table lab_reports (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha_muestra date not null,
  laboratorio   text default 'Echevarne',
  referencia    text,                    -- nº de análisis
  pdf_path      text                     -- Supabase Storage
);

create table lab_markers (
  id            uuid primary key default gen_random_uuid(),
  lab_report_id uuid not null references lab_reports(id) on delete cascade,
  marcador      text not null,           -- 'glucosa' | 'hba1c' | 'alt' | 'ggt' | ...
  valor         numeric(10,3) not null,
  unidad        text not null,
  ref_min       numeric(10,3),
  ref_max       numeric(10,3),
  fuera_rango   boolean generated always as (
    (ref_min is not null and valor < ref_min) or
    (ref_max is not null and valor > ref_max)
  ) stored
);

-- ============================================================================
-- 7.bis CALIBRACIÓN DEL OBJETIVO CALÓRICO
-- ============================================================================
-- Los rangos de profiles NO son estáticos: cada ~3 semanas se comparan la
-- pérdida real y la esperada y se mueve el rango. Aquí queda la trazabilidad.

create table target_adjustments (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null default current_date,
  kcal_min_ant  integer, kcal_max_ant integer,
  kcal_min_new  integer not null, kcal_max_new integer not null,
  perdida_esperada_kg numeric(4,2),
  perdida_real_kg     numeric(4,2),
  motivo        text not null,
  -- true si el cambio lo pautó un profesional sanitario, no el algoritmo
  pautado_por_profesional boolean not null default false
);

-- Segundo indicador, además de la adherencia: ¿comió DENTRO del rango?
-- Cumplir el plan y comer bien no son lo mismo.
create view dias_en_rango as
select
  ml.profile_id,
  date_trunc('week', ml.fecha)::date as semana,
  count(*) filter (where d.kcal between p.kcal_min and p.kcal_max
                     and d.prot >= p.proteina_min_g) as dias_ok,
  count(*) as dias,
  round(100.0 * count(*) filter (where d.kcal between p.kcal_min and p.kcal_max
                     and d.prot >= p.proteina_min_g) / nullif(count(*),0), 0) as pct
from (
  select profile_id, fecha, sum(0) as kcal, sum(0) as prot   -- lo calcula la app
  from meal_logs group by profile_id, fecha
) d
join meal_logs ml on ml.profile_id = d.profile_id and ml.fecha = d.fecha
join profiles p on p.id = ml.profile_id
group by ml.profile_id, date_trunc('week', ml.fecha);

-- ============================================================================
-- 7.ter MEDICACIÓN Y SUPLEMENTOS
-- ============================================================================
-- Metformina, letrozol, ovitrelle, bisoprolol, Sedotime, vitamina D...
-- Relevante para el planificador: la metformina se toma CON comida.

create table medications (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  nombre        text not null,
  dosis         text,
  -- momentos del día en los que toca: {desayuno,comida,cena,noche}
  momentos      text[] not null default '{}',
  con_comida    boolean not null default false,
  activa        boolean not null default true,
  pautada_por   text,
  desde         date
);

create table medication_logs (
  id            uuid primary key default gen_random_uuid(),
  medication_id uuid not null references medications(id) on delete cascade,
  fecha         date not null,
  momento       text not null,
  tomada        boolean not null default true,
  unique (medication_id, fecha, momento)
);

-- ============================================================================
-- 8. ALERTAS DE SEGURIDAD
-- ============================================================================
-- Materializa el freno del punto 9.2 de la propuesta: si la pérdida supera el
-- ritmo máximo dos semanas seguidas, la app AVISA de que hay que subir kcal.
-- No felicita. Se consulta desde el panel de salud.

create table safety_alerts (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  -- 'perdida_demasiado_rapida' | 'kcal_bajo_suelo' | 'proteina_insuficiente'
  tipo          text not null,
  mensaje       text not null,
  fecha         date not null default current_date,
  atendida      boolean not null default false
);

-- ============================================================================
-- 9. ROW LEVEL SECURITY
-- ============================================================================
-- Regla general: los datos del hogar los ven ambos; los datos personales de
-- salud y entrenamiento, solo su dueño.

alter table households        enable row level security;
alter table profiles          enable row level security;
alter table food_dislikes     enable row level security;
alter table availability_slots enable row level security;
alter table recipes           enable row level security;
alter table recipe_ingredients enable row level security;
alter table meal_plans        enable row level security;
alter table planned_meals     enable row level security;
alter table meal_logs         enable row level security;
alter table shopping_lists    enable row level security;
alter table shopping_items    enable row level security;
alter table pantry            enable row level security;
alter table pantry_movements  enable row level security;
alter table tickets           enable row level security;
alter table ticket_lines      enable row level security;
alter table routines          enable row level security;
alter table routine_sessions  enable row level security;
alter table session_exercises enable row level security;
alter table workout_logs      enable row level security;
alter table set_logs          enable row level security;
alter table unplanned_activities enable row level security;
alter table weight_logs       enable row level security;
alter table measurements      enable row level security;
alter table lab_reports       enable row level security;
alter table lab_markers       enable row level security;
alter table safety_alerts     enable row level security;
alter table target_adjustments enable row level security;
alter table medications       enable row level security;
alter table medication_logs   enable row level security;

-- ingredients, products, exercises: catálogo común, lectura para autenticados
alter table ingredients enable row level security;
alter table products enable row level security;
alter table product_aliases enable row level security;
alter table exercises enable row level security;

create policy "catalogo_lectura" on ingredients for select to authenticated using (true);
create policy "catalogo_escritura" on ingredients for all to authenticated using (true);
create policy "productos_todo" on products for all to authenticated using (true);
create policy "alias_todo" on product_aliases for all to authenticated using (true);
create policy "ejercicios_todo" on exercises for all to authenticated using (true);

-- Helper: hogar del usuario actual
create or replace function current_household()
returns uuid language sql stable security definer as $$
  select household_id from profiles where id = auth.uid()
$$;

-- Datos del hogar (compartidos entre los dos)
create policy "hogar_propio" on households for all to authenticated
  using (id = current_household());
create policy "perfiles_hogar" on profiles for select to authenticated
  using (household_id = current_household());
create policy "perfil_propio_escritura" on profiles for update to authenticated
  using (id = auth.uid());
create policy "recetas_hogar" on recipes for all to authenticated
  using (household_id = current_household());
create policy "planes_hogar" on meal_plans for all to authenticated
  using (household_id = current_household());
create policy "listas_hogar" on shopping_lists for all to authenticated
  using (household_id = current_household());
create policy "despensa_hogar" on pantry for all to authenticated
  using (household_id = current_household());
create policy "movimientos_hogar" on pantry_movements for all to authenticated
  using (household_id = current_household());
create policy "tickets_hogar" on tickets for all to authenticated
  using (household_id = current_household());

-- Datos personales (solo su dueño)
create policy "peso_propio" on weight_logs for all to authenticated
  using (profile_id = auth.uid());
create policy "medidas_propias" on measurements for all to authenticated
  using (profile_id = auth.uid());
create policy "analiticas_propias" on lab_reports for all to authenticated
  using (profile_id = auth.uid());
create policy "rutinas_propias" on routines for all to authenticated
  using (profile_id = auth.uid());
create policy "entrenos_propios" on workout_logs for all to authenticated
  using (profile_id = auth.uid());
create policy "actividad_propia" on unplanned_activities for all to authenticated
  using (profile_id = auth.uid());
create policy "alertas_propias" on safety_alerts for all to authenticated
  using (profile_id = auth.uid());
create policy "calibracion_propia" on target_adjustments for all to authenticated
  using (profile_id = auth.uid());
create policy "medicacion_propia" on medications for all to authenticated
  using (profile_id = auth.uid());
create policy "tomas_propias" on medication_logs for all to authenticated
  using (medication_id in (select id from medications where profile_id = auth.uid()));
create policy "comidas_hogar" on planned_meals for all to authenticated
  using (profile_id in (select id from profiles where household_id = current_household()));
create policy "registro_propio" on meal_logs for all to authenticated
  using (profile_id = auth.uid());

-- Tablas hijas: heredan del padre
create policy "ing_recetas" on recipe_ingredients for all to authenticated
  using (recipe_id in (select id from recipes where household_id = current_household()));
create policy "items_lista" on shopping_items for all to authenticated
  using (shopping_list_id in (select id from shopping_lists where household_id = current_household()));
create policy "lineas_ticket" on ticket_lines for all to authenticated
  using (ticket_id in (select id from tickets where household_id = current_household()));
create policy "sesiones_rutina" on routine_sessions for all to authenticated
  using (routine_id in (select id from routines where profile_id = auth.uid()));
create policy "ejercicios_sesion" on session_exercises for all to authenticated
  using (routine_session_id in (
    select rs.id from routine_sessions rs
    join routines r on r.id = rs.routine_id where r.profile_id = auth.uid()));
create policy "series_log" on set_logs for all to authenticated
  using (workout_log_id in (select id from workout_logs where profile_id = auth.uid()));
create policy "marcadores" on lab_markers for all to authenticated
  using (lab_report_id in (select id from lab_reports where profile_id = auth.uid()));
create policy "aversiones" on food_dislikes for all to authenticated
  using (profile_id in (select id from profiles where household_id = current_household()));
create policy "disponibilidad" on availability_slots for all to authenticated
  using (profile_id in (select id from profiles where household_id = current_household()));

-- ============================================================================
-- 10. ÍNDICES
-- ============================================================================

create index on planned_meals (profile_id, fecha);
create index on meal_logs (profile_id, fecha);
create index on weight_logs (profile_id, fecha desc);
create index on workout_logs (profile_id, fecha desc);
create index on pantry (household_id, ingredient_id);
create index on pantry_movements (household_id, fecha desc);
create index on recipe_ingredients (recipe_id);
create index on ticket_lines (ticket_id) where mapeado = false;
create index on lab_markers (lab_report_id, marcador);

-- ============================================================================
-- 11. AMPLIACIÓN v0.5 · 18/08/2026
--     Lo que el esquema original no contemplaba: alimentos que entran sin
--     ticket, conservas, la rutina diaria de estiramientos y el dibujo y el
--     vídeo propio de cada ejercicio.
-- ============================================================================

-- ── 11.1 · De dónde viene lo que hay en la despensa ─────────────────────────
-- No todo se compra. La huerta, un regalo o una pesca entran sin ticket, y hay
-- que distinguirlos: cuestan 0 € en caja pero SÍ cuestan en consumo, valorados
-- a precio de referencia. Si no, comer de la huerta parecería gratis.
create type origen_t as enum ('ticket','huerta','regalo','otra_tienda','pesca','conserva','ajuste');

alter table pantry
  add column if not exists origen origen_t not null default 'ticket',
  -- valor imputado al consumo cuando no hay precio pagado (€ por kg)
  add column if not exists precio_referencia numeric(8,3),
  add column if not exists nota text;

-- pantry_movements.origen pasa de texto libre a la misma lista cerrada,
-- ampliada con los motivos de salida.
alter table pantry_movements
  add column if not exists motivo text
    check (motivo in ('ticket','espontaneo','comida','ajuste_mensual','caducado','conservado','regalado'));

create index if not exists pantry_origen_idx on pantry (household_id, origen);

-- ── 11.2 · Conservas: una transformación, no un movimiento normal ───────────
-- 1.400 g de calabacín fresco que caduca en 8 días se convierten en raciones
-- congeladas que duran 10 meses. Cambia la cantidad, la ubicación y la fecha.
create type metodo_conserva_t as enum
  ('congelado_raciones','congelado_crema','encurtido','secado','mermelada','confitado','esterilizado');

create table preserves (
  id              uuid primary key default gen_random_uuid(),
  household_id    uuid not null references households(id) on delete cascade,
  ingredient_id   uuid not null references ingredients(id) on delete cascade,
  metodo          metodo_conserva_t not null,
  cantidad_origen numeric(9,1) not null,          -- g que entraron
  cantidad_final  numeric(9,1) not null,          -- g que quedan tras procesar
  raciones        smallint,                       -- en cuántos botes o bolsas
  fecha           date not null default current_date,
  caducidad_nueva date not null,
  ubicacion       text not null default 'congelador',
  consumido       boolean not null default false,
  nota            text
);

create index on preserves (household_id, caducidad_nueva)
  where consumido = false;

-- Peticiones de receta para un ingrediente que ha entrado y no sabe usarse.
create table recipe_requests (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete cascade,
  motivo        text,                             -- 'sin receta en temporada', etc.
  fecha         timestamptz not null default now(),
  resuelta      boolean not null default false
);

-- ── 11.3 · Rutina diaria fija, fuera de las sesiones ────────────────────────
-- Los estiramientos de espalda de Tama: 10 min, todos los días, a la hora que
-- pueda. No es una sesión de entrenamiento y no compite con ellas.
create type franja_t as enum ('manana','dia','noche');

create table daily_routines (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  nombre        text not null,
  minutos       smallint not null,
  -- los primeros N pasos son el mínimo si se va justo de tiempo
  pasos_minimos smallint,
  activa        boolean not null default true,
  nota          text
);

create table daily_routine_steps (
  id            uuid primary key default gen_random_uuid(),
  routine_id    uuid not null references daily_routines(id) on delete cascade,
  orden         smallint not null,
  exercise_id   uuid references exercises(id) on delete set null,
  nombre        text not null,
  dosis         text not null,                    -- '45 s por lado', '10 rep lentas'
  unique (routine_id, orden)
);

create table daily_routine_logs (
  id            uuid primary key default gen_random_uuid(),
  routine_id    uuid not null references daily_routines(id) on delete cascade,
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null default current_date,
  franja        franja_t,
  completa      boolean not null default true,    -- false = solo los pasos mínimos
  unique (routine_id, fecha)
);

create index on daily_routine_logs (profile_id, fecha desc);

-- ── 11.4 · Cómo se enseña un ejercicio ──────────────────────────────────────
alter table exercises
  -- identificador del monigote SVG que va dentro de la app ('fig-sentadilla')
  add column if not exists figura text,
  -- el fallo típico, en una frase. Es lo que el dibujo no puede transmitir.
  add column if not exists clave_tecnica text,
  -- true para el bloque de movilidad, true para los preventivos de tobillo/rodilla
  add column if not exists es_movilidad boolean not null default false,
  add column if not exists es_preventivo boolean not null default false;

-- Vídeo propio: diez segundos desde un lado, grabados por ellos. Vale más que
-- cualquier dibujo porque es SU técnica. Se guarda en Supabase Storage.
create table exercise_videos (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  exercise_id   uuid not null references exercises(id) on delete cascade,
  storage_path  text not null,
  fecha         date not null default current_date,
  nota          text,
  unique (profile_id, exercise_id, fecha)
);

create index on exercise_videos (profile_id, exercise_id, fecha desc);

-- ── 11.5 · Row Level Security de las tablas nuevas ──────────────────────────
alter table preserves            enable row level security;
alter table recipe_requests      enable row level security;
alter table daily_routines       enable row level security;
alter table daily_routine_steps  enable row level security;
alter table daily_routine_logs   enable row level security;
alter table exercise_videos      enable row level security;

create policy "conservas_casa" on preserves for all to authenticated
  using (household_id = current_household());
create policy "peticiones_casa" on recipe_requests for all to authenticated
  using (household_id = current_household());
create policy "rutina_diaria_propia" on daily_routines for all to authenticated
  using (profile_id = auth.uid());
create policy "pasos_rutina_diaria" on daily_routine_steps for all to authenticated
  using (routine_id in (select id from daily_routines where profile_id = auth.uid()));
create policy "registro_rutina_diaria" on daily_routine_logs for all to authenticated
  using (profile_id = auth.uid());
create policy "videos_propios" on exercise_videos for all to authenticated
  using (profile_id = auth.uid());

-- ============================================================================
-- 12. AMPLIACIÓN v0.6 · compra sin día fijo (flujo A + C)
--     Una lista se ABRE al confirmar el menú y se CIERRA cuando se ha comprado,
--     el día que sea. El ticket no es una importación suelta: es lo que cuadra
--     lo comprado con lo previsto.
-- ============================================================================

-- Nivel de detalle de una compra. La app no finge que todas valen lo mismo:
-- de una compra 'solo_gasto' no puede fiarse la despensa igual que de una 'exacta'.
create type fidelidad_t as enum ('exacta','desde_lista','solo_gasto');
create type estado_lista_t as enum ('abierta','cerrada','anulada');
create type via_ticket_t as enum ('digital_email','digital_compartido','foto_ocr','manual');

alter table shopping_lists
  add column if not exists estado estado_lista_t not null default 'abierta',
  add column if not exists tipo text not null default 'fresco'   -- 'fresco' | 'grande'
    check (tipo in ('fresco','grande')),
  add column if not exists abierta_at timestamptz not null default now(),
  add column if not exists cerrada_at timestamptz,
  -- NO hay día de compra fijo: la lista vive hasta que se cierra
  add column if not exists cerrada_por uuid references profiles(id);

alter table shopping_items
  add column if not exists cogido boolean not null default false,
  add column if not exists no_habia boolean not null default false;

alter table tickets
  add column if not exists fidelidad fidelidad_t not null default 'exacta',
  add column if not exists via via_ticket_t not null default 'foto_ocr',
  add column if not exists comercio text not null default 'Mercadona',
  add column if not exists shopping_list_id uuid references shopping_lists(id) on delete set null;

alter table ticket_lines
  -- una línea puede no ser comida: papel de horno, detergente. Cuenta para el
  -- gasto pero no entra en la despensa.
  add column if not exists no_despensa boolean not null default false,
  -- lo que el diccionario propuso, para medir si acierta y dejar de preguntar
  add column if not exists sugerencia_id uuid references ingredients(id),
  add column if not exists sugerencia_aceptada boolean;

-- Resultado de cruzar el ticket con la lista: lo interesante no es lo que
-- coincide, es lo que no.
create table purchase_reconciliations (
  id                uuid primary key default gen_random_uuid(),
  household_id      uuid not null references households(id) on delete cascade,
  shopping_list_id  uuid not null references shopping_lists(id) on delete cascade,
  ticket_id         uuid references tickets(id) on delete set null,
  coinciden         smallint not null default 0,
  fuera_de_lista    smallint not null default 0,
  gasto_fuera_lista numeric(8,2) not null default 0,   -- el número que mide el impulso
  no_habia          smallint not null default 0,
  precios_corregidos smallint not null default 0,
  total_pagado      numeric(8,2),
  fidelidad         fidelidad_t not null,
  fecha             timestamptz not null default now()
);

create index on purchase_reconciliations (household_id, fecha desc);
create index if not exists listas_abiertas_idx on shopping_lists (household_id, tipo)
  where estado = 'abierta';

-- Ritmo de la casa: la tanda SÍ tiene día (condiciona el menú); la compra no.
alter table households
  add column if not exists dia_tanda smallint check (dia_tanda between 1 and 7),
  add column if not exists dia_compra smallint check (dia_compra between 1 and 7),  -- null = sin día fijo
  add column if not exists listas_separadas boolean not null default true;

alter table purchase_reconciliations enable row level security;
create policy "conciliaciones_casa" on purchase_reconciliations for all to authenticated
  using (household_id = current_household());

-- ============================================================================
-- 13. AMPLIACIÓN v0.7 · comprar fuera de Mercadona con la lista en la mano
-- ============================================================================

-- Lo que se marca EN EL SÚPER. Si esto viviera solo en la pantalla, salir de
-- ella borraría media compra hecha.
alter table shopping_items
  add column if not exists cantidad_real numeric(9,1),   -- si el formato de esa cadena difiere
  add column if not exists motivo_falta text
    check (motivo_falta in ('sustituido','pendiente','quitado')),
  add column if not exists marcado_at timestamptz;

-- Cadenas: mis precios de referencia son de Mercadona. Cada cadena se desvía de
-- ellos de forma bastante estable, y ese único número sirve para prever el mes
-- sin necesidad de detallar ni una línea.
create table retailers (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  nombre        text not null,
  -- factor = pagado / estimado con precios de referencia. Media móvil.
  factor        numeric(5,3) not null default 1.000,
  compras       smallint not null default 0,
  -- true en la cadena de la que salen los precios de referencia
  es_referencia boolean not null default false,
  -- true si manda ticket digital por correo (parseable); false si vive en su app
  ticket_email  boolean not null default false,
  unique (household_id, nombre)
);

alter table tickets
  add column if not exists retailer_id uuid references retailers(id) on delete set null,
  add column if not exists total_estimado numeric(8,2),   -- lo que la app preveía
  add column if not exists factor_aplicado numeric(5,3);  -- el factor en el momento de cerrar

alter table purchase_reconciliations
  add column if not exists retailer_id uuid references retailers(id) on delete set null,
  add column if not exists total_estimado numeric(8,2),
  add column if not exists cantidades_corregidas smallint not null default 0;

create index on retailers (household_id);

alter table retailers enable row level security;
create policy "cadenas_casa" on retailers for all to authenticated
  using (household_id = current_household());

-- ============================================================================
-- 14. AMPLIACIÓN v0.8 · qué es de la casa y qué es de cada uno
--     La regla ya estaba en el esquema (household_id vs profile_id) pero la
--     interfaz la ignoraba: bloqueaba TODO al mirar el perfil del otro.
--     Lo compartido se marca desde cualquiera de los dos móviles y se ve al
--     momento; lo personal, solo su dueño.
-- ============================================================================

-- Tareas compartidas del día (sacar del congelador, preparar túper, resolver una
-- caducidad). Cuelgan de la casa, y se guarda QUIÉN las marcó: sin eso,
-- «¿lo has sacado tú?» sigue siendo una conversación en vez de un dato.
create table shared_checks (
  id            uuid primary key default gen_random_uuid(),
  household_id  uuid not null references households(id) on delete cascade,
  fecha         date not null default current_date,
  clave         text not null,              -- 'desc_Merluza congelada', 'tuper', 'esp_Acelgas'
  estado        text not null default 'hecho'
    check (estado in ('hecho','usado','congelado','tirado','pospuesto')),
  marcado_por   uuid not null references profiles(id),
  marcado_at    timestamptz not null default now(),
  unique (household_id, fecha, clave)
);
create index on shared_checks (household_id, fecha desc);

-- Un extra fuera de plan sin calorías no suma al día y no sirve de nada:
-- «Otro» pasa a exigir nombre y tamaño.
alter table meal_logs
  add column if not exists extra_nombre text,
  add column if not exists extra_kcal integer,
  add column if not exists extra_estimado boolean not null default false;  -- true si viene de «poca cosa / normal / bastante»

alter table shared_checks enable row level security;
create policy "checks_casa" on shared_checks for all to authenticated
  using (household_id = current_household());

-- Referencia rápida del ámbito de cada cosa, para que no se pierda:
--   DE LA CASA  → shopping_lists · shopping_items · pantry · pantry_movements
--                 preserves · tickets · meal_plans · planned_meals · shared_checks
--   DE CADA UNO → meal_logs · medication_logs · workout_logs · set_logs
--                 weight_logs · measurements · lab_reports · daily_routine_logs
comment on table shared_checks is
  'Compartida: cualquiera de los dos marca, los dos lo ven. Guarda quién y cuándo.';

-- ============================================================================
-- 15. AMPLIACIÓN v0.9 · una cuenta cada uno
--     Se retira el conmutador de persona de la interfaz. No era una decisión
--     estética: las políticas de abajo ya hacían imposible ver al otro, así que
--     el conmutador solo funcionaba en el prototipo.
--     Cristina entra como Cristina desde su móvil; Tama, como Tama.
-- ============================================================================

-- profiles.id ES auth.users.id. Al crear las dos cuentas en Supabase Auth,
-- se insertan aquí las dos filas con ESE MISMO id. Este disparador lo hace
-- solo, para que no haya que copiar UUIDs a mano y equivocarse.
create or replace function public.perfil_al_registrarse()
returns trigger language plpgsql security definer set search_path = public as $$
declare casa uuid;
begin
  -- Una sola casa: los dos perfiles cuelgan de ella.
  select id into casa from households limit 1;
  insert into public.profiles (id, household_id, nombre, sexo, fecha_nacimiento, altura_cm)
  values (
    new.id, casa,
    coalesce(new.raw_user_meta_data->>'nombre', split_part(new.email,'@',1)),
    -- Tolerante a propósito: si el metadato viene mal escrito, el alta de la
    -- cuenta NO debe fallar. Probado el 23/08: 'varon' reventaba el registro
    -- entero con un error de enum, y en Supabase eso se ve como «no se pudo
    -- crear el usuario», sin decir por qué.
    (case lower(coalesce(new.raw_user_meta_data->>'sexo',''))
       when 'hombre' then 'hombre' when 'varon' then 'hombre' when 'varón' then 'hombre'
       when 'male' then 'hombre' when 'h' then 'hombre' when 'v' then 'hombre'
       else 'mujer' end)::sexo_t,
    coalesce(nullif(new.raw_user_meta_data->>'fecha_nacimiento','')::date, '1990-01-01'),
    coalesce(nullif(new.raw_user_meta_data->>'altura_cm','')::numeric, 165)
  )
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists al_registrarse on auth.users;
create trigger al_registrarse
  after insert on auth.users
  for each row execute function public.perfil_al_registrarse();

-- Realtime solo para lo compartido: lo personal no tiene a quién notificar.
alter publication supabase_realtime add table shared_checks;
alter publication supabase_realtime add table shopping_items;
alter publication supabase_realtime add table pantry;

-- ── CÓMO SE CREAN LAS DOS CUENTAS ───────────────────────────────────────────
-- En el panel de Supabase → Authentication → Users → Add user, dos veces.
-- En «User Metadata» de cada una:
--
--   Cristina  {"nombre":"Cristina","sexo":"mujer","fecha_nacimiento":"1991-10-01","altura_cm":159}
--   Tama      {"nombre":"Tama","sexo":"hombre","fecha_nacimiento":"1989-06-01","altura_cm":175}
--
-- El disparador de arriba crea el perfil de cada uno en la misma casa.
-- Después, en cada móvil se entra UNA vez con su correo y no vuelve a pedirlo.
-- Nada de una cuenta compartida: con una sola cuenta, auth.uid() sería el mismo
-- para los dos y las reglas personales dejarían de separar nada.

comment on function public.perfil_al_registrarse() is
  'Crea el perfil con el mismo id que auth.users al dar de alta cada cuenta. Evita copiar UUIDs a mano.';

-- ============================================================================
-- 16. AMPLIACIÓN v1.0 · días de oficina y comida transportable
-- ============================================================================

-- `availability_slots` guarda día de la semana: sirve para un patrón, no para
-- «el jueves 11 de septiembre». Los días de oficina se saben con antelación y
-- se marcan en el calendario del mes, así que van por fecha.
create table office_days (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  fecha         date not null,
  -- la regla es que SE LLEVA TÚPER. Comer fuera es la excepción y se registra
  -- en el cierre del día, no aquí.
  lleva_desayuno boolean not null default false,
  lleva_comida   boolean not null default true,
  lleva_media    boolean not null default true,
  unique (profile_id, fecha)
);
create index on office_days (profile_id, fecha);

-- Cristina come en la oficina todos los laborables: no hace falta marcarlo día a
-- día. true = todos los laborables son de oficina salvo que se diga lo contrario.
alter table profiles
  add column if not exists oficina_todos_los_laborables boolean not null default false;

-- ¿Se puede llevar a la oficina? NO es lo mismo que aguantar en túper:
-- `aguanta_tupper_dias` mide días en la nevera, esto mide si se come fuera de
-- casa sin plato ni microondas. Una tostada aguanta tres días y llega blanda.
--   2 = se lleva tal cual (fruta, frutos secos)
--   1 = se lleva en táper y aguanta (yogures, porridge, tortitas, ensaladas)
--   0 = solo en casa (tostadas, revueltos, cremas calientes)
alter table recipes
  add column if not exists transportable smallint not null default 0
    check (transportable between 0 and 2);

comment on column recipes.transportable is
  'Regla A9: si ese día hay alguien en la oficina, su desayuno (si se lo lleva) y su media mañana necesitan transportable >= 1.';

alter table office_days enable row level security;
-- Los días de oficina del otro SÍ se ven: condicionan cuántos túper se preparan
-- por la noche, que es una tarea de la casa. No son un dato personal.
create policy "oficina_hogar" on office_days for select to authenticated
  using (profile_id in (select id from profiles where household_id = current_household()));
create policy "oficina_propia" on office_days for all to authenticated
  using (profile_id = auth.uid());

-- ============================================================================
-- 17. CORRECCIÓN DE SEGURIDAD · las vistas también tienen que respetar RLS
--     Encontrado el 23/08/2026 ejecutando el esquema contra un Postgres real.
--
--     Una vista creada por el propietario se ejecuta con SUS permisos, no con
--     los de quien consulta, así que SALTA el Row Level Security de las tablas
--     de debajo. `peso_media_7d` lee de weight_logs, cuya política es
--     `profile_id = auth.uid()` — pero a través de la vista se veían las filas
--     de los dos. Lo mismo con adherencia_semanal y dias_en_rango sobre
--     meal_logs.
--
--     `security_invoker = true` (Postgres 15+) hace que la vista se ejecute con
--     los permisos del que consulta, y entonces sí se aplica RLS.
-- ============================================================================

alter view peso_media_7d      set (security_invoker = true);
alter view adherencia_semanal set (security_invoker = true);
alter view dias_en_rango      set (security_invoker = true);
alter view recipe_nutrition   set (security_invoker = true);

comment on view peso_media_7d is
  'security_invoker: sin esto la vista saltaría el RLS de weight_logs y cada uno vería el peso del otro.';

-- ============================================================================
-- 18. AMPLIACIÓN v1.1 · lo que la interfaz necesita y el esquema no guardaba
--     Detectado al escribir el cargador del catálogo: la base tenía los datos
--     nutricionales y las reglas del planificador, pero no lo que hace falta
--     para PINTAR una receta ni para escalarla.
-- ============================================================================

alter table ingredients
  -- peso de una unidad: un huevo son 60 g, un yogur 125, una lata de atún 80.
  -- Sin esto no se puede convertir «1 ud» en gramos, y el escalado se rompe.
  add column if not exists peso_ud numeric(7,1),
  -- modo por defecto; el de cada receta manda sobre este
  add column if not exists escalado_def escalado_t not null default 'proporcional';

alter table recipes
  add column if not exists emoji text,
  -- familia de color en la interfaz: t-carne, t-pescado, t-verdura…
  add column if not exists tipo text,
  add column if not exists tags text[] not null default '{}',
  add column if not exists temporada_nota text;

comment on column ingredients.peso_ud is
  'Gramos por unidad. Imprescindible para escalar: sin esto «2 huevos» no se puede pasar a gramos.';
comment on column recipes.transportable is
  'Regla A9. 2 = se lleva tal cual · 1 = en táper · 0 = solo en casa. No es lo mismo que aguanta_tupper_dias.';

-- ============================================================================
-- 19. CORRECCIÓN · la clave de la receta se guarda, no se deriva del nombre
--     El cargador del catálogo la estaba derivando del nombre visible, y eso
--     tiene dos problemas: no coincide con las claves del modelo, y sobre todo
--     RENOMBRAR UN PLATO ROMPERÍA el historial y las puntuaciones, que apuntan
--     a la clave. La clave es identidad; el nombre es presentación.
-- ============================================================================

alter table recipes add column if not exists clave text;
create unique index if not exists recipes_clave_idx on recipes (household_id, clave);

comment on column recipes.clave is
  'Identidad estable de la receta. El nombre puede cambiar; esta no. Historial y puntuaciones apuntan aquí.';

-- ============================================================================
-- 20. SEGURIDAD · el repositorio pasa a ser PÚBLICO (23/08/2026)
--
--     Con el código público, cualquiera ve la URL del proyecto y la anon key.
--     Eso es aceptable —RLS protege las filas— PERO abre un agujero que el
--     repositorio privado tapaba por accidente:
--
--       Supabase permite registro público por defecto. Y el disparador de
--       arriba mete a CUALQUIER cuenta nueva en «la primera casa que
--       encuentre», que es la vuestra. Un desconocido que se registrase
--       entraría en Casa T&C y vería la compra, la despensa y el menú.
--
--     Dos cerrojos, porque uno solo no basta:
--       1. Aquí: solo se crea perfil para dos correos concretos.
--       2. En el panel: Authentication → Sign In / Providers → Email →
--          desactivar «Allow new users to sign up».
-- ============================================================================

create table if not exists correos_permitidos (
  email text primary key,
  nombre text not null
);
alter table correos_permitidos enable row level security;
-- Nadie la lee desde la app: solo la usa el disparador, que va como definer.
create policy "nadie_lee_permitidos" on correos_permitidos for select to authenticated using (false);

-- ⚠️ CAMBIAD ESTOS DOS CORREOS POR LOS VUESTROS ANTES DE EJECUTAR
insert into correos_permitidos (email, nombre) values
  ('cristina@ejemplo.com','Cristina'),
  ('tama@ejemplo.com','Tama')
on conflict (email) do nothing;

create or replace function public.perfil_al_registrarse()
returns trigger language plpgsql security definer set search_path = public as $$
declare casa uuid; permitido boolean;
begin
  -- Cerrojo 1: solo los dos correos de la casa tienen perfil. Si se registra
  -- cualquier otro, la cuenta existe en Auth pero SIN perfil, y sin perfil
  -- current_household() devuelve null: no ve absolutamente nada.
  select exists(select 1 from correos_permitidos where lower(email)=lower(new.email))
    into permitido;
  if not permitido then
    raise log 'Registro rechazado, correo no permitido: %', new.email;
    return new;
  end if;

  select id into casa from households limit 1;
  insert into public.profiles (id, household_id, nombre, sexo, fecha_nacimiento, altura_cm)
  values (
    new.id, casa,
    coalesce(new.raw_user_meta_data->>'nombre',
             (select nombre from correos_permitidos where lower(email)=lower(new.email))),
    (case lower(coalesce(new.raw_user_meta_data->>'sexo',''))
       when 'hombre' then 'hombre' when 'varon' then 'hombre' when 'varón' then 'hombre'
       when 'male' then 'hombre' when 'h' then 'hombre' when 'v' then 'hombre'
       else 'mujer' end)::sexo_t,
    coalesce(nullif(new.raw_user_meta_data->>'fecha_nacimiento','')::date, '1990-01-01'),
    coalesce(nullif(new.raw_user_meta_data->>'altura_cm','')::numeric, 165)
  )
  on conflict (id) do nothing;
  return new;
end $$;

comment on table correos_permitidos is
  'Cerrojo del registro: sin perfil no hay household, y sin household no se ve nada. Imprescindible con el repositorio público.';
