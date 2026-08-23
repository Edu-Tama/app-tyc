# App T&C

Planificación de dieta, compra, despensa, entrenamiento y salud para dos personas.

- **100 recetas** con sus meses de temporada · **96 ingredientes** con macros completos
- Generador de menús con 8 restricciones duras y 10 blandas
- Funciona sin cobertura (PWA instalable)

---

> ⚠️ **Para verla en el móvil o en el ordenador, abre siempre la carpeta completa.**
> `index.html` carga `datos.js` como archivo aparte —esa separación es lo que
> permite cambiar a Supabase sin tocar la interfaz— así que abrirlo suelto deja
> la app en blanco. Si quieres una versión de un solo archivo para enseñarla,
> usa `prototipo-un-archivo.html` — y `prototipo-tama.html` para ver la vista de
> Tama, que al no haber conmutador de persona es la única forma de mirarla sin
> desplegar.

## Qué hay en cada archivo

| Archivo | Qué es |
|---|---|
| `index.html` | La app entera: pantallas e interacción. **Necesita `datos.js` al lado**: sola no arranca. |
| `datos.js` | **Capa de datos.** Hoy, datos de ejemplo. Es el único archivo que cambia al conectar Supabase. |
| `hidratar.js` | El puente: carga catálogo, perfil y despensa desde Supabase y sustituye los datos de ejemplo. Si la base falla, la app sigue y lo avisa. |
| `prueba-conexion.html` | Diagnóstico en un clic: URL, clave, cuentas, aislamiento y catálogo. |
| `supabase.js` | La misma capa, pero contra la base de datos. Sustituye a `datos.js` en el paso 5. |
| `schema.sql` | Estructura de la base de datos: 43 tablas, todas con Row Level Security. |
| `inventario.sql` | Vuestra despensa real del 23/08: 34 productos, 24 kg. Se ejecuta después de la semilla. |
| `semilla.sql` | Ingredientes, productos y las 100 recetas. Generado desde el modelo, no editar a mano. |
| `sw.js` · `manifest.json` | Lo que hace que sea instalable y funcione sin cobertura. |

---

## Antes de empezar: dos cuentas, no una

Cristina entra como Cristina desde su móvil y Tama como Tama desde el suyo.
No es una preferencia: las tablas personales tienen la regla
`profile_id = auth.uid()`, así que con una cuenta compartida las reglas
dejarían de separar nada.

En Supabase → Authentication → Users → Add user, dos veces, y en «User
Metadata» de cada una:

```json
Cristina  {"nombre":"Cristina","sexo":"mujer","fecha_nacimiento":"1991-10-01","altura_cm":159}
Tama      {"nombre":"Tama","sexo":"hombre","fecha_nacimiento":"1989-06-01","altura_cm":175}
```

El disparador `al_registrarse` de `schema.sql` crea el perfil de cada uno en la
misma casa, con el mismo id que la cuenta. No hay que copiar ningún UUID a mano.

## Despliegue, paso a paso

### 1. Repositorio (5 min)

Crea un repositorio **privado** en GitHub y sube estos archivos.

> El repositorio va a contener la clave pública de Supabase. Es pública por
> diseño y solo es segura porque **Row Level Security está activo en todas las
> tablas**. Aun así: privado.

### 2. Proyecto en Supabase (10 min)

1. Crea un proyecto nuevo en [supabase.com](https://supabase.com). Región: Europa (Frankfurt).
2. Abre **SQL Editor** y ejecuta `schema.sql` entero de una vez.
3. Ejecuta después `semilla.sql`.
4. Comprueba en **Table Editor** que hay 89 filas en `ingredients` y 60 en `recipes`.

### 3. Usuarios (5 min)

1. En **Authentication → Users**, crea dos usuarios con correo y contraseña.
2. Copia sus UUID y ejecuta en el SQL Editor:

```sql
insert into profiles (id, household_id, nombre, sexo, fecha_nacimiento, altura_cm,
                      estado, kcal_min, kcal_max, kcal_suelo, proteina_min_g)
values
 ('UUID-DE-CRISTINA', '11111111-1111-1111-1111-111111111111', 'Cristina', 'mujer',
  '1991-10-01', 159, 'perdida_peso', 1600, 1750, 1500, 100),
 ('UUID-DE-TAMA',     '11111111-1111-1111-1111-111111111111', 'Tama', 'hombre',
  '1989-06-01', 175, 'recomposicion', 2250, 2400, 1800, 115);

-- alergia (bloqueo duro) y aversión de Cristina
insert into food_dislikes (profile_id, ingrediente, nivel, nota) values
 ('UUID-DE-CRISTINA', 'Calamar', 'prohibido', 'alergia · el pulpo sí'),
 ('UUID-DE-CRISTINA', 'Sepia',   'prohibido', 'alergia'),
 ('UUID-DE-CRISTINA', 'Judías verdes', 'solo_si_triturado', 'aversión');

-- medicación
insert into medications (profile_id, nombre, dosis, momentos, con_comida) values
 ('UUID-DE-CRISTINA', 'Metformina', '850 mg', '{desayuno,cena}', true),
 ('UUID-DE-CRISTINA', 'Letrozol', '2,5 mg', '{noche}', false),
 ('UUID-DE-TAMA', 'Bisoprolol', '2,5 mg (½)', '{desayuno}', false),
 ('UUID-DE-TAMA', 'Sedotime', '15 mg', '{noche}', false);
```

### 4. Despliegue (10 min)

1. Entra en [vercel.com](https://vercel.com) con la cuenta de GitHub.
2. **Add New → Project** y elige el repositorio.
3. Framework preset: **Other**. No hay que compilar nada.
4. Deploy. En un minuto tienes una URL con HTTPS.

> GitHub Pages sirve repositorios privados en su plan gratuito. GitHub Pages exige
> plan de pago para eso.

### 5. Conectar la app a la base de datos

1. En Supabase, **Settings → API**: copia la *Project URL* y la *anon public key*.
2. Pégalas en `supabase.js` (constante `CONFIG`).
3. En `index.html`, sustituye:

```html
<script src="datos.js"></script>
```

por:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase.js"></script>
```

4. `git push`. GitHub Pages despliega solo.

### 6. Instalar en los móviles (2 min)

Abre la URL en Chrome → menú → **Añadir a la pantalla de inicio**.

Hay que instalarla, no dejarla como pestaña: **las notificaciones solo funcionan
en la app instalada**.

---

## Después del despliegue

- **Inventario de despensa** — ver `guia-inventario.md`.
- **Primera compra** con la lista de la app y escanear el ticket: ahí se aprenden
  los primeros 40-60 nombres abreviados de Mercadona.
- **Notificaciones**: hace falta una Edge Function con cron en Supabase. Es el
  único componente que queda por montar y no bloquea el arranque.

## Copias de seguridad

El plan gratuito de Supabase **no incluye copias automáticas**. Exportación
mensual a Drive pendiente de montar. Hasta entonces, desde el SQL Editor:

```sql
-- exportar a CSV desde Table Editor, tabla por tabla
```

## Coste

| | |
|---|---|
| Supabase (plan gratuito) | 0 € |
| GitHub Pages (plan gratuito) | 0 € |
| OCR de tickets | ~0,20 €/mes |
| Dominio propio (opcional) | ~12 €/año |
