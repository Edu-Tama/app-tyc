/* ═══════════════════════════════════════════════════════════════════════════
   HIDRATACIÓN · sustituye los datos de ejemplo por los de Supabase

   Se carga DESPUÉS de datos.js y ANTES de que la app pinte nada. No reemplaza
   los objetos —son const y no se puede— sino que los vacía y los rellena con
   lo que hay en la base. Así la interfaz no se entera de nada y datos.js sigue
   sirviendo como respaldo si la conexión falla.

   Lo que ya viene de la base:  catálogo · perfiles y objetivos · despensa
   Lo que todavía es de ejemplo: menú de la semana · entrenos · analíticas
   ═══════════════════════════════════════════════════════════════════════════ */

const SB = {
  url: 'https://cevujurdekimsaqtrwmy.supabase.co',
  key: 'sb_publishable_XMnWrEuY-aJZ824GMTpSsg_4DBW3j7X'
};
/* Todo el estado propio va dentro de un objeto para no chocar con los nombres
   que ya usa la app. SESION la declara index.html: aquí solo se rellena. */
const TYC = {db:null, demo:false};

const MODO_ESC = {proporcional:'p', unidad:'u', fijo:'f'};
const vaciar = o => { for (const k in o) delete o[k]; };

/* ── el catálogo: 96 ingredientes y 100 recetas ─────────────────────────── */
async function hidratarCatalogo(){
  const [{data:ings, error:e1}, {data:recs, error:e2}] = await Promise.all([
    TYC.db.from('ingredients').select('*'),
    TYC.db.from('recipes')
      .select('*, recipe_ingredients(cantidad, unidad, escalado, ingredients(nombre))')
      .eq('activa', true)
  ]);
  if (e1 || e2) throw (e1 || e2);

  vaciar(ING); vaciar(R); vaciar(PRECIO); vaciar(UBIC);
  for (const i of ings){
    ING[i.nombre] = [+i.kcal_100, +i.proteina_100, i.seccion_super,
      i.peso_ud ? +i.peso_ud : null, MODO_ESC[i.escalado_def] || 'p',
      +i.carbos_100, +i.grasa_100, +i.fibra_100, +i.ig_orientativo];
    if (i.precio_ref_kg != null) PRECIO[i.nombre] = +i.precio_ref_kg;
    /* La ubicación no está en la base: se deduce de la sección, que es lo que
       importa para los avisos de caducidad y para el espacio en la nevera. */
    UBIC[i.nombre] = i.seccion_super === 'Congelados' ? 'congelador'
      : ['Frutería','Lácteos y huevos','Carnicería','Pescadería','Charcutería'].includes(i.seccion_super)
        ? 'nevera' : 'armario';
  }
  for (const r of recs){
    R[r.clave] = {
      n:r.nombre, e:r.emoji || '🍽', t:r.tipo || 't-verdura',
      mom:(r.momentos && r.momentos[0]) || 'comida',
      meses:r.meses || [1,2,3,4,5,6,7,8,9,10,11,12],
      act:r.min_activos, tot:r.min_totales,
      tupper:r.aguanta_tupper_dias || 0,
      lista:r.lista_en_min ?? undefined,
      port:r.transportable ?? 0,
      batch:r.apta_batch, congelable:r.congelable,
      temp:r.temporada_nota || undefined,
      tags:r.tags || [], metodo:(r.metodo || []).join(' y '),
      ing:(r.recipe_ingredients || []).map(x =>
        x.unidad === 'ud' ? [x.ingredients.nombre, +x.cantidad, 'ud']
                          : [x.ingredients.nombre, +x.cantidad]),
      pasos:(r.instrucciones || '').split(' · ').filter(Boolean)
    };
    /* El modo de una línea concreta manda sobre el del ingrediente. */
    for (const x of (r.recipe_ingredients || []))
      if (ING[x.ingredients.nombre] && MODO_ESC[x.escalado] === 'f')
        ING[x.ingredients.nombre][4] = 'f';
  }
  /* Formatos de venta: lo que convierte gramos en envases y en euros. */
  const {data:prods} = await TYC.db.from('products').select('formato_g, ingredients(nombre)');
  vaciar(FORMATO);
  (prods || []).forEach(p => { if (p.ingredients) FORMATO[p.ingredients.nombre] = +p.formato_g; });
  return {ing:Object.keys(ING).length, rec:Object.keys(R).length};
}

/* ── el perfil: los objetivos salen de la base, no de una constante ─────── */
async function hidratarPerfil(){
  const {data:p, error} = await TYC.db.from('profiles')
    .select('id, nombre, sexo, altura_cm, kcal_min, kcal_max, kcal_suelo, proteina_min_g, estado, household_id')
    .eq('id', SESION.id).single();
  if (error) throw error;

  const yo = p.nombre.toLowerCase().startsWith('c') ? 'c' : 't';
  const d = PERFILES[yo];
  d.nombre = p.nombre;
  d.kcalMin = p.kcal_min; d.kcalMax = p.kcal_max; d.protMin = p.proteina_min_g;
  /* El factor de ración se deriva del objetivo. Si mañana cambian las kcal,
     las raciones se recalculan solas en vez de quedarse desfasadas. */
  FACTOR[yo] = +(((p.kcal_min + p.kcal_max) / 2) / 1800).toFixed(2);
  OBJ[yo] = {min:p.kcal_min, max:p.kcal_max, prot:p.proteina_min_g};

  SESION.perfil = yo; SESION.nombre = p.nombre; SESION.household = p.household_id;
  return yo;
}

/* ── la despensa real ───────────────────────────────────────────────────── */
async function hidratarDespensa(){
  const {data, error} = await TYC.db.from('pantry')
    .select('cantidad, caducidad, origen, nota, ubicacion, ingredients(nombre)');
  if (error) throw error;
  vaciar(DESPENSA); ESPONTANEOS.length = 0;
  for (const p of (data || [])){
    if (!p.ingredients) continue;
    DESPENSA[p.ingredients.nombre] = [+p.cantidad, p.caducidad || '2027-12-31'];
    /* Dónde está ESTA existencia manda sobre dónde suele estar el ingrediente:
       el pimiento del catálogo es fresco y de nevera, el nuestro es en dados y
       está congelado. Si no, la app manda a descongelar un bote de judías. */
    if (p.ubicacion) UBIC[p.ingredients.nombre] = p.ubicacion;
    if (p.origen && p.origen !== 'ticket')
      ESPONTANEOS.push({n:p.ingredients.nombre, g:+p.cantidad, origen:
        ({huerta:'huerta',regalo:'regalo',otra_tienda:'otra',pesca:'pesca'}[p.origen] || 'otra'),
        fecha:'—', cad:p.caducidad || '2027-12-31'});
  }
  return Object.keys(DESPENSA).length;
}

/* ── los objetivos de cada uno ──────────────────────────────────────────── */
async function hidratarObjetivos(){
  const {data, error} = await TYC.db.from('goals')
    .select('titulo, detalle, plazo, metrica').eq('activo', true);
  if (error) throw error;
  const yo = SESION.perfil;
  OBJETIVOS[yo] = (data || []).map(g => ({
    titulo: g.titulo, detalle: g.detalle || '', plazo: g.plazo, metrica: g.metrica
  }));
  return OBJETIVOS[yo].length;
}


/* ── la lista de la compra, de la casa ─────────────────────────────────────
   La lista se calcula UNA VEZ y se guarda. Antes cada móvil la recalculaba de
   su propio menú, y bastaba con que los menús no coincidieran para que uno
   pidiera 4 kg de patata y el otro 2. Ahora hay una lista por casa: el primero
   que abre la app la crea, el segundo lee la que hay, y lo que marque
   cualquiera de los dos aparece en el otro.                                  */
const LISTA_ID = {fresco:null, grande:null};
const ITEM_ID  = {};        // nombre de ingrediente → id de la fila

async function hidratarCompra(){
  const {data: ings} = await TYC.db.from('ingredients').select('id, nombre');
  const idIng = Object.fromEntries((ings || []).map(i => [i.nombre, i.id]));
  const lista = listaCompra();

  for (const [tipo, L] of Object.entries(LISTAS)){
    /* ¿hay ya una lista abierta de este tipo? */
    let {data: fila} = await TYC.db.from('shopping_lists')
      .select('id, abierta_at, estado')
      .eq('tipo', tipo).eq('estado', 'abierta').maybeSingle();

    if (!fila){
      const {data: creada} = await TYC.db.from('shopping_lists')
        .insert({household_id: SESION.household, tipo, estado: 'abierta'})
        .select('id, abierta_at, estado').maybeSingle();
      if (creada){
        fila = creada;
        /* Los artículos se escriben con las cantidades ya sumadas de los dos.
           A partir de aquí la lista no se recalcula: se lee. */
        const filas = L.secciones.flatMap(sec => (lista[sec] || []).map(i => ({
          shopping_list_id: creada.id, ingredient_id: idIng[i.n],
          cantidad: i.comprado, unidad: 'g', seccion_super: sec,
          envases: i.envases, formato_g: i.formato
        }))).filter(f => f.ingredient_id);
        if (filas.length) await TYC.db.from('shopping_items').insert(filas);
      } else {
        /* El otro móvil se adelantó: el índice único ha rechazado esta. */
        const {data: otra} = await TYC.db.from('shopping_lists')
          .select('id, abierta_at, estado').eq('tipo', tipo).eq('estado','abierta').maybeSingle();
        fila = otra;
      }
    }
    if (!fila) continue;
    LISTA_ID[tipo] = fila.id;
    L.estado = 'abierta';
    L.abierta = fechaCorta(fila.abierta_at);
  }

  await leerMarcas();
  GUARDAR_MARCA = guardarMarca;
  CERRAR_LISTA  = cerrarListaBD;
  escucharLista();
  return Object.values(LISTA_ID).filter(Boolean).length;
}

/* Lo marcado, sea quien sea quien lo marcó. */
async function leerMarcas(){
  const ids = Object.values(LISTA_ID).filter(Boolean);
  if (!ids.length) return;
  const {data} = await TYC.db.from('shopping_items')
    .select('id, cogido, no_habia, motivo_falta, cantidad_real, marcado_por, ingredients(nombre), profiles:marcado_por(nombre)')
    .in('shopping_list_id', ids);
  vaciar(MARCAS);
  for (const it of (data || [])){
    const n = it.ingredients?.nombre; if (!n) continue;
    ITEM_ID[n] = it.id;
    if (!it.cogido && !it.no_habia) continue;
    MARCAS[n] = {
      cogido: !!it.cogido,
      g: it.cantidad_real != null ? +it.cantidad_real : undefined,
      noHabia: it.no_habia ? (MOTIVO_FALTA[it.motivo_falta] || 'no había') : undefined,
      motivo: it.motivo_falta || undefined,
      quien: it.profiles?.nombre || undefined
    };
  }
}

/* Marcar es un hecho de la casa: se guarda con quién y cuándo. */
async function guardarMarca(nombre, m){
  const id = ITEM_ID[nombre];
  if (!id) return;                        // artículo que no está en la lista guardada
  const fila = {
    id,
    cogido: !!m.cogido,
    no_habia: !!m.noHabia,
    motivo_falta: m.motivo || null,
    cantidad_real: m.g != null ? m.g : null,
    marcado_por: (m.cogido || m.noHabia) ? SESION.id : null,
    marcado_at: (m.cogido || m.noHabia) ? new Date().toISOString() : null
  };
  const {error} = await TYC.db.from('shopping_items').update(fila).eq('id', id);
  if (error) console.warn('[T&C] no se ha podido guardar la marca:', error.message);
}

async function cerrarListaBD(tipo){
  const id = LISTA_ID[tipo]; if (!id) return;
  await TYC.db.from('shopping_lists')
    .update({estado:'cerrada', cerrada:true, cerrada_at:new Date().toISOString(),
             cerrada_por:SESION.id}).eq('id', id);
  LISTA_ID[tipo] = null;
}

/* Y lo que marca uno tiene que aparecerle al otro mientras compra. */
let CANAL_LISTA = null;
function escucharLista(){
  if (CANAL_LISTA) return;
  CANAL_LISTA = TYC.db.channel('lista-compra')
    .on('postgres_changes', {event:'*', schema:'public', table:'shopping_items'},
        async () => { await leerMarcas(); if (typeof pintarCompra === 'function') pintarCompra(); })
    .subscribe();
}

const fechaCorta = iso => {
  if (!iso) return 'hoy';
  const f = new Date(iso);
  return `${f.getDate()} ${['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][f.getMonth()]}`;
};

/* ── la medicación, de la base ──────────────────────────────────────────── */
const ORDEN_MOM = {ayunas:0, desayuno:1, comida:2, merienda:3, cena:4, noche:5};
async function hidratarMedicacion(){
  const {data, error} = await TYC.db.from('medications')
    .select('nombre, dosis, momentos, con_comida, notas_admin').eq('activa', true);
  if (error) throw error;
  const yo = SESION.perfil;
  MEDICACION[yo] = [];
  for (const m of (data || []))
    for (const mom of (m.momentos || []))
      MEDICACION[yo].push({
        n: m.nombre + (m.dosis ? ' ' + m.dosis : ''),
        cuando: mom.charAt(0).toUpperCase() + mom.slice(1),
        comida: m.con_comida, e: '💊',
        nota: m.notas_admin || undefined,
        _o: ORDEN_MOM[mom] ?? 9
      });
  MEDICACION[yo].sort((a,b) => a._o - b._o);
  return MEDICACION[yo].length;
}

/* El enum de la base dice «media_manana»; la app, «media». Se traduce en la
   frontera y no en medio del código, que es donde se pierde. */
const MOM_BD  = {desayuno:'desayuno', media:'media_manana', comida:'comida',
                 merienda:'merienda', cena:'cena'};
const MOM_APP = Object.fromEntries(Object.entries(MOM_BD).map(([a,b])=>[b,a]));

/* ── el menú de la semana ───────────────────────────────────────────────────
   Se genera con el mismo motor que ya estaba probado y se guarda en la base,
   para que los dos móviles vean exactamente la misma semana. Si ya hay una
   guardada, se lee; solo se genera cuando no existe. */
function lunesISO(off){
  const f = new Date(); const d = (f.getDay() + 6) % 7;
  f.setDate(f.getDate() - d + off * 7);
  return f.toISOString().slice(0, 10);
}
async function hidratarMenu(){
  MES = new Date().getMonth() + 1;          // temporada real, no agosto fijo
  for (const [off, destino] of [[0, MENU], [1, MENU2]]){
    const ini = lunesISO(off);
    let {data: plan} = await TYC.db.from('meal_plans')
      .select('id, planned_meals(fecha, momento, recipe_id, recipes(clave))')
      .eq('semana_inicio', ini).maybeSingle();

    if (!plan || !(plan.planned_meals || []).length){
      const gen = generarSemana();
      if (!gen) continue;                    // sin semana válida: se queda la de ejemplo
      const guardada = await guardarSemana(ini, gen.semana);
      if (guardada){
        volcarSemana(destino, off, gen.semana);
      } else {
        /* No se ha guardado porque el otro móvil ya había creado la semana:
           `meal_plans` tiene unique(household_id, semana_inicio). Antes de esto
           cada uno se quedaba con SU semana generada, y entonces el menú, la
           tanda y la lista de la compra salían distintos en cada teléfono
           (4 kg de patata en uno y 2 kg en el otro). El plan de la casa es uno:
           se relee el que ya existe y se usa ese. */
        const {data: otra} = await TYC.db.from('meal_plans')
          .select('id, planned_meals(fecha, momento, recipe_id, recipes(clave))')
          .eq('semana_inicio', ini).maybeSingle();
        if (otra && (otra.planned_meals || []).length) plan = otra; else continue;
        volcarDesdePlan(destino, off, plan);
      }
    } else {
      volcarDesdePlan(destino, off, plan);
    }
  }
}
/* De las filas de planned_meals a la forma que usa la interfaz. */
function volcarDesdePlan(destino, off, plan){
  const porFecha = {};
  for (const pm of plan.planned_meals){
    const m = MOM_APP[pm.momento] || pm.momento;
    (porFecha[pm.fecha] = porFecha[pm.fecha] || {})[m] = pm.recipes?.clave;
  }
  const dias = Object.keys(porFecha).sort();
  volcarSemana(destino, off, dias.map(f => porFecha[f]));
}
function volcarSemana(destino, off, semana){
  const dias = diasDeSemana(off);
  destino.length = 0;
  semana.forEach((d, i) => {
    if (!dias[i]) return;
    destino.push({d: dias[i].d, n: dias[i].n, iso: dias[i].iso,
      desayuno: d.desayuno, media: d.media, comida: d.comida,
      merienda: d.merienda, cena: d.cena, _c: d._c, _t: d._t});
  });
}
/* Devuelve true solo si esta llamada ha creado el plan. Si otro móvil se
   adelantó, devuelve false y quien llama relee el de la casa. */
async function guardarSemana(ini, semana){
  const {data: plan, error} = await TYC.db.from('meal_plans')
    .insert({household_id: SESION.household, semana_inicio: ini, confirmado: true})
    .select('id').maybeSingle();
  if (error || !plan) return false;
  const claves = [...new Set(semana.flatMap(d => MOM.map(m => d[m])))];
  const {data: recs} = await TYC.db.from('recipes').select('id, clave').in('clave', claves);
  const idDe = Object.fromEntries((recs || []).map(r => [r.clave, r.id]));
  const filas = [];
  semana.forEach((d, i) => {
    const f = new Date(ini); f.setDate(f.getDate() + i);
    const fecha = f.toISOString().slice(0, 10);
    MOM.forEach(m => { if (idDe[d[m]]) filas.push({
      meal_plan_id: plan.id, fecha, momento: MOM_BD[m], recipe_id: idDe[d[m]],
      profile_id: SESION.id }); });
  });
  if (filas.length) await TYC.db.from('planned_meals').insert(filas);
  return true;
}

/* ── historial: si no hay, no se inventa ────────────────────────────────────
   Enseñar una gráfica de peso con datos que nadie ha registrado convierte la
   app en una demo. Mejor un hueco honesto que un dibujo falso. */
async function hidratarHistorial(){
  const [{data: pesos}, {data: medidas}] = await Promise.all([
    TYC.db.from('weight_logs').select('fecha, peso_kg').order('fecha'),
    TYC.db.from('measurements').select('fecha, cintura_cm').order('fecha')
  ]);
  const yo = SESION.perfil;
  const serie = (pesos || []).map(x => +x.peso_kg);
  if (serie.length){ const d = yo === 'c' ? PESO_C : PESO_T; d.length = 0; d.push(...serie); }
  else { PESO_C.length = 0; PESO_T.length = 0; }

  const cint = (medidas || []).map(x => +x.cintura_cm).filter(Boolean);
  CINTURA.c.length = 0; CINTURA.t.length = 0;
  if (cint.length) CINTURA[yo].push(...cint);
  /* La fecha de la última medida decide si hoy toca volver a medir. */
  CINTURA_ULT_F = medidas && medidas.length ? medidas[medidas.length - 1].fecha : null;

  /* Analíticas: solo las que estén cargadas de verdad. */
  const {data: labs} = await TYC.db.from('lab_reports').select('id').limit(1);
  if (!labs || !labs.length) LABS_EVO.length = 0;
  return {pesos: serie.length, cintura: cint.length};
}

/* ── fuera todo lo que era de ejemplo ───────────────────────────────────────
   El fallo de diseño de la primera versión: hidrataba lo que sabía cargar y
   dejaba intacto lo demás. Resultado: la app enseñaba comida tirada que nadie
   tiró, túper que nadie cocinó y un ticket de Mercadona que no existe. Todo lo
   que no tiene respaldo en la base se vacía, y la interfaz enseña un hueco
   honesto. */
function limpiarEjemplo(){
  const vaciarArr = a => { if (Array.isArray(a)) a.length = 0; };
  [DESPERDICIO, SOBRAS, COMPRAS, TICKET, HISTORIAL, CONSERVAS_HECHAS].forEach(vaciarArr);
  vaciar(PRECIO_REAL); vaciar(PUNT); vaciar(MARCAS); vaciar(MIS_VIDEOS); vaciar(POR); vaciar(ACC);
  EXCEPCIONES.s1.length = 0; EXCEPCIONES.s2.length = 0;
  TANDA_ESTADO.s1 = null; TANDA_ESTADO.s2 = null;
  EXTRA_LOG.c.length = 0; EXTRA_LOG.t.length = 0;

  /* Adherencia, bienestar y pasos: no hay ni un registro todavía. */
  ADH_ENT.c.length = 0; ADH_ENT.t.length = 0;
  ['c','t'].forEach(p => { ['hambre','energia','sueno'].forEach(k => BIENESTAR[p][k].length = 0); });
  PASOS.c = 0; PASOS.t = 0;

  /* La conciliación del ticket y el aviso de compra entrante, a cero. */
  CONCILIA.coincide = 0; CONCILIA.extra.length = 0;
  CONCILIA.noHabia.length = 0; CONCILIA.precios = 0;

  /* Las listas empiezan abiertas y sin nada cogido. */
  Object.values(LISTAS).forEach(L => { L.estado = 'abierta'; L.cogidos = 0; L.abierta = 'hoy'; });

  /* Cargas de fuerza: el bloque es real pero el histórico no. Se deja solo el
     último valor, que es la prescripción de esta semana. */
  ['c','t'].forEach(p => Object.keys(CARGAS[p]).forEach(ej => {
    const v = CARGAS[p][ej]; CARGAS[p][ej] = [v[v.length-1]];
  }));

  CARDIO_HECHO.c = null; CARDIO_HECHO.t = null;

  /* Salud: adherencia a la medicación, adherencia semanal y días en rango.
     Son porcentajes calculados sobre registros que todavía no existen. */
  MED_ADH.c.length = 0; MED_ADH.t.length = 0;
  ADH.length = 0; RANGO.length = 0;

  SIN_EJEMPLO = true;
}

/* ── arranque ───────────────────────────────────────────────────────────── */
async function arrancarApp(){
  if (typeof supabase === 'undefined'){ return caerADemo('no se ha podido cargar la librería'); }
  TYC.db = supabase.createClient(SB.url, SB.key, {auth:{persistSession:true, autoRefreshToken:true}});

  const {data:{session}} = await TYC.db.auth.getSession();
  if (!session) return pantallaAcceso();

  try {
    SESION = {id:session.user.id, email:session.user.email, perfil:'c'};
    limpiarEjemplo();
    const yo = await hidratarPerfil();
    const cat = await hidratarCatalogo();
    const nd  = await hidratarDespensa();
    /* Cada bloque va por su cuenta: que falle el menú no debe dejar la
       medicación o la despensa con datos de ejemplo. Antes un solo error
       tiraba toda la hidratación al modo demostración. */
    const fallos = [];
    for (const [nombre, fn] of [['objetivos', hidratarObjetivos], ['medicación', hidratarMedicacion],
                                ['historial',  hidratarHistorial],
                                ['menú',       hidratarMenu],
                                /* la compra va DESPUÉS del menú: la lista sale
                                   de lo que el menú de la casa necesita */
                                ['compra',     hidratarCompra]]){
      try { await fn(); }
      catch(err){ fallos.push(nombre); console.error('T&C · falla '+nombre+':', err.message||err); }
    }
    if (fallos.length) avisoParcial(fallos);
    P = yo; DISPOSITIVO = yo;
    console.log(`T&C · ${cat.ing} ingredientes · ${cat.rec} recetas · ${nd} en despensa · ${SESION.nombre}`);
    ocultarAcceso(); sembrarDia(HORA); render();
  } catch (e) {
    caerADemo(e.message || e);
  }
}

/* Aviso cuando solo falla una parte: el resto de la app sí son datos reales. */
function avisoParcial(fallos){
  const av = document.getElementById('aviso-modo');
  if (!av) return;
  av.insertAdjacentHTML('afterbegin',
    `<div class="banner" style="margin-bottom:11px"><b class="t">⚠ ${fallos.join(' y ')} sin cargar</b>
      El resto son vuestros datos de verdad. Lo de ${fallos.join(' y ')} que veas es de ejemplo
      y no se guarda. Pásaselo a quien lleva la app.</div>`);
}

/* Si la base falla, la app NO se queda en blanco: sigue con los datos de
   ejemplo y lo dice arriba. Vale más una app que funciona a medias que una
   pantalla vacía sin explicación. */
function caerADemo(motivo){
  TYC.demo = true;
  console.warn('T&C · modo demostración:', motivo);
  ocultarAcceso(); sembrarDia(HORA); render();
  const av = document.getElementById('aviso-modo');
  if (av) av.insertAdjacentHTML('afterbegin',
    `<div class="banner" style="margin-bottom:11px"><b class="t">⚠ Datos de ejemplo</b>
      No se ha podido conectar con la base (${motivo}). Lo que ves no son vuestros datos y
      nada de lo que marques se guarda. Comprueba la conexión y recarga.</div>`);
}

function pantallaAcceso(motivo){
  document.getElementById('acceso').style.display = 'flex';
  if (motivo) document.getElementById('acc-error').textContent = motivo;
}
function ocultarAcceso(){ document.getElementById('acceso').style.display = 'none'; }

async function entrar(){
  const b = document.getElementById('acc-btn');
  b.disabled = true; b.textContent = 'Entrando…';
  document.getElementById('acc-error').textContent = '';
  const {error} = await TYC.db.auth.signInWithPassword({
    email: document.getElementById('acc-mail').value.trim(),
    password: document.getElementById('acc-pass').value });
  b.disabled = false; b.textContent = 'Entrar';
  if (error) return pantallaAcceso(
    /Invalid login/i.test(error.message) ? 'Correo o contraseña incorrectos' : error.message);
  arrancarApp();
}
async function salir(){ await TYC.db.auth.signOut(); location.reload(); }
