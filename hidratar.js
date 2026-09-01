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
    REC_ID[r.clave] = r.id;
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
        /* `cantidad` es LO QUE HACE FALTA COMPRAR, no el envase entero. Se
           guardaba `i.comprado` —dos envases de 1 kg cuando faltaba 1— y esa
           cifra inflada es la que se leía después, la que se enseñaba en la
           lista y la que entraba en la despensa al cerrar. El envase queda en
           `formato_g`, que es su sitio. */
        const filas = L.secciones.flatMap(sec => (lista[sec] || []).map(i => ({
          shopping_list_id: creada.id, ingredient_id: idIng[i.n],
          cantidad: Math.round(i.g), unidad: 'g', seccion_super: sec,
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
  /* La lista guardada es una foto del momento en que se abrió. Si después
     cambia el menú —se regenera la semana, se corrige el catálogo— aparecen
     ingredientes que el menú pide y la lista no tiene: pasó con las ciruelas.
     Se añaden los que falten SIN tocar nada de lo ya marcado. Quitar no se
     quita nada por las bravas: un producto de menos en la lista, estando en el
     súper, es peor que uno de más. */
  await completarLista(idIng, lista);
  await leerMarcas();
  GUARDAR_MARCA = guardarMarca;
  CERRAR_LISTA  = cerrarListaBD;
  REABRIR_LISTA = reabrirListaBD;
  escucharLista();
  return Object.values(LISTA_ID).filter(Boolean).length;
}

async function completarLista(idIng, lista){
  const nuevas = [];
  /* Qué hay YA en cada lista abierta. Mirar solo ITEM_ID no basta: después de
     reabrir una compra, ITEM_ID puede venir de otra lista y se acababan
     duplicando artículos que ya estaban. */
  const ids = Object.values(LISTA_ID).filter(Boolean);
  const yaEn = {};
  if (ids.length){
    const {data} = await TYC.db.from('shopping_items')
      .select('shopping_list_id, ingredient_id').in('shopping_list_id', ids);
    for (const it of (data || [])) yaEn[it.shopping_list_id + '|' + it.ingredient_id] = true;
  }
  for (const [tipo, L] of Object.entries(LISTAS)){
    const id = LISTA_ID[tipo]; if (!id) continue;
    for (const sec of L.secciones){
      for (const i of (lista[sec] || [])){
        const ing = idIng[i.n]; if (!ing) continue;
        if (yaEn[id + '|' + ing]) continue;
        yaEn[id + '|' + ing] = true;                    // ni dos veces en la misma pasada
        nuevas.push({shopping_list_id:id, ingredient_id:ing,
          cantidad:Math.round(i.g), unidad:'g', seccion_super:sec,
          envases:i.envases, formato_g:i.formato});
      }
    }
  }
  if (!nuevas.length) return 0;
  const {error} = await TYC.db.from('shopping_items').insert(nuevas);
  if (error){ console.warn('[T&C] no se han podido añadir artículos:', error.message); return 0; }
  console.log(`T&C · ${nuevas.length} artículos añadidos a la lista (el menú los pide y no estaban)`);
  return nuevas.length;
}

/* Lo guardado: la lista Y lo marcado. Esto es lo que se pinta.
   Antes solo se leían las marcas y la lista se seguía CALCULANDO en cada
   móvil. Bastaba con una diferencia mínima en el catálogo cargado —o en la
   versión de la app— para que las cantidades no coincidieran entre los dos
   teléfonos. Ahora la lista viene entera de la base: es un dato, no un
   cálculo que cada uno repite por su cuenta. */
async function leerMarcas(){
  const ids = Object.values(LISTA_ID).filter(Boolean);
  if (!ids.length) return;
  const {data} = await TYC.db.from('shopping_items')
    .select('id, cantidad, seccion_super, envases, formato_g, cogido, no_habia, motivo_falta, cantidad_real, marcado_por, ingredients(nombre), profiles:marcado_por(nombre)')
    .in('shopping_list_id', ids);
  vaciar(MARCAS);
  const lista = {};
  for (const it of (data || [])){
    const n = it.ingredients?.nombre; if (!n) continue;
    ITEM_ID[n] = it.id;

    const g = +it.cantidad;
    const sec = it.seccion_super || (ING[n] ? ING[n][2] : 'Despensa');
    const f = it.formato_g ? +it.formato_g : (FORMATO[n] || g);
    const env = it.envases || Math.max(1, Math.ceil(g / (f || g || 1)));
    const precioKg = PRECIO[n] || 0;
    (lista[sec] = lista[sec] || []).push({
      n, g, envases: env, formato: f, comprado: env * f,
      tengo: DESPENSA[n] ? DESPENSA[n][0] : 0,
      precio: env * f * precioKg / 1000,
      precioReal: g * precioKg / 1000,
      sobra: (env * f - g) * precioKg / 1000
    });

    if (!it.cogido && !it.no_habia) continue;
    MARCAS[n] = {
      cogido: !!it.cogido,
      g: it.cantidad_real != null ? +it.cantidad_real : undefined,
      noHabia: it.no_habia ? (MOTIVO_FALTA[it.motivo_falta] || 'no había') : undefined,
      motivo: it.motivo_falta || undefined,
      quien: it.profiles?.nombre || undefined
    };
  }
  for (const s in lista) lista[s].sort((a, b) => b.precioReal - a.precioReal);
  LISTA_GUARDADA = Object.keys(lista).length ? lista : null;
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

/* REABRIR UNA COMPRA.
   Una compra no siempre se hace de una vez: se cierra la lista, faltan cuatro
   cosas y se vuelve al súper el jueves. Sin esto, la lista cerrada quedaba
   muerta y la nueva empezaba de cero, pidiendo otra vez lo que ya estaba en el
   carro. Reabrir devuelve la lista tal y como se cerró, con sus marcas. */
async function reabrirListaBD(tipo){
  /* Si hay una lista abierta de ese tipo, estorba: el índice único no admite
     dos. Se descarta solo si está intacta —nadie ha marcado nada en ella—;
     si tiene marcas, es una compra en curso y no se toca. */
  if (LISTA_ID[tipo]){
    const {data: marcada} = await TYC.db.from('shopping_items')
      .select('id').eq('shopping_list_id', LISTA_ID[tipo]).or('cogido.eq.true,no_habia.eq.true').limit(1);
    if (marcada && marcada.length) return {error:'hay una compra en curso sin cerrar'};
    await TYC.db.from('shopping_items').delete().eq('shopping_list_id', LISTA_ID[tipo]);
    await TYC.db.from('shopping_lists').delete().eq('id', LISTA_ID[tipo]);
    LISTA_ID[tipo] = null;
  }

  const {data: ultima} = await TYC.db.from('shopping_lists')
    .select('id, abierta_at').eq('tipo', tipo).eq('estado', 'cerrada')
    .order('cerrada_at', {ascending:false}).limit(1).maybeSingle();
  if (!ultima) return {error:'no hay ninguna compra cerrada que reabrir'};

  await TYC.db.from('shopping_lists')
    .update({estado:'abierta', cerrada:false, cerrada_at:null, cerrada_por:null})
    .eq('id', ultima.id);
  LISTA_ID[tipo] = ultima.id;
  LISTAS[tipo].estado = 'abierta';
  LISTAS[tipo].abierta = fechaCorta(ultima.abierta_at);
  await leerMarcas();
  return {ok:true};
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

/* ── los días de oficina de Tama ────────────────────────────────────────────
   El calendario existía desde hace días pero no guardaba nada: al cerrar la app
   los días marcados se perdían. Es de las pocas cosas que se registran con
   antelación —te los comunican— así que perderlos duele más que perder un tic.
   Se leen los dos perfiles: quién come fuera de casa lo tienen que saber los
   dos, porque decide cuántos túper se preparan la noche antes. */
async function hidratarOficina(){
  const {data, error} = await TYC.db.from('office_days')
    .select('fecha, lleva_desayuno, profiles(nombre)');
  if (error) throw error;
  OFICINA.t.length = 0; DESAYUNO_FUERA.t.length = 0;
  for (const d of (data || [])){
    const quien = (d.profiles?.nombre || '').toLowerCase().startsWith('c') ? 'c' : 't';
    if (quien !== 't') continue;              // Cristina va todos los laborables
    OFICINA.t.push(d.fecha);
    if (d.lleva_desayuno) DESAYUNO_FUERA.t.push(d.fecha);
  }
  GUARDAR_OFICINA = guardarOficina;
  return OFICINA.t.length;
}

async function guardarOficina(fecha, esOficina, llevaDesayuno){
  if (!esOficina){
    const {error} = await TYC.db.from('office_days')
      .delete().eq('profile_id', SESION.id).eq('fecha', fecha);
    if (error) console.warn('[T&C] no se ha podido borrar el día de oficina:', error.message);
    return;
  }
  const {error} = await TYC.db.from('office_days').upsert({
    profile_id: SESION.id, fecha,
    lleva_desayuno: !!llevaDesayuno, lleva_comida: true, lleva_media: true
  }, {onConflict: 'profile_id,fecha'});
  if (error) console.warn('[T&C] no se ha podido guardar el día de oficina:', error.message);
}

/* ── la medicación, de la base ──────────────────────────────────────────── */
const ORDEN_MOM = {ayunas:0, desayuno:1, comida:2, merienda:3, cena:4, noche:5};
async function hidratarMedicacion(){
  const {data, error} = await TYC.db.from('medications')
    .select('id, nombre, dosis, momentos, con_comida, notas_admin').eq('activa', true);
  if (error) throw error;
  const yo = SESION.perfil;
  MEDICACION[yo] = [];
  for (const m of (data || []))
    for (const mom of (m.momentos || []))
      MEDICACION[yo].push({
        id: m.id, mom: mom,          // hacen falta para poder marcarla
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
/* El lunes de la semana que la app tiene delante. Calculaba el lunes de HOY
   (17 de agosto) mientras la interfaz pintaba la semana del 31: se buscaba y se
   guardaba un plan con una fecha y se dibujaba con otra, así que el menú de la
   base nunca llegaba a la pantalla y se quedaba el de ejemplo. Una sola fuente:
   la misma que usa diasDeSemana(). */
function lunesISO(off){
  return diasDeSemana(off)[0].iso;
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
      /* El plan puede existir pero estar vacío: se creó la cabecera y las
         comidas no llegaron a insertarse. Antes esto dejaba la app con el menú
         de ejemplo para siempre, porque el segundo intento chocaba con el
         `unique` y se rendía. Si la cabecera ya está, se rellena. */
      const guardada = plan
        ? await rellenarSemana(plan.id, ini, gen.semana)
        : await guardarSemana(ini, gen.semana);
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
  return await rellenarSemana(plan.id, ini, semana);
}

/* Las comidas de una cabecera de plan que ya existe. */
async function rellenarSemana(planId, ini, semana){
  const claves = [...new Set(semana.flatMap(d => MOM.map(m => d[m])))];
  const {data: recs} = await TYC.db.from('recipes').select('id, clave').in('clave', claves);
  const idDe = Object.fromEntries((recs || []).map(r => [r.clave, r.id]));
  const filas = [];
  semana.forEach((d, i) => {
    const f = new Date(ini + 'T12:00'); f.setDate(f.getDate() + i);
    const fecha = isoLocal(f);   // local, no UTC: si no, el plan se corre un día
    MOM.forEach(m => { if (idDe[d[m]]) filas.push({
      meal_plan_id: planId, fecha, momento: MOM_BD[m], recipe_id: idDe[d[m]],
      profile_id: SESION.id }); });
  });
  if (!filas.length) return false;
  /* El error de esta inserción se ignoraba. Si falla, el plan queda vacío y la
     app enseña el menú de ejemplo sin decir nada: hay que enterarse. */
  const {error} = await TYC.db.from('planned_meals').insert(filas);
  if (error){ console.error('T&C · no se han guardado las comidas:', error.message); return false; }
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


/* ═══════════════════════════════════════════════════════════════════════════
   LO QUE SE REGISTRA
   Hasta aquí la app leía de la base y escribía solo la lista de la compra y
   los días de oficina. Todo lo demás —marcar una comida, la medicación, el
   peso, el cierre del día— cambiaba una variable en memoria y se perdía al
   recargar. Esto es lo que lo hace real.

   Dos reglas que valen para todo lo de abajo:

   1. NADA SE PIERDE SIN COBERTURA. En la cocina de casa hay wifi; en el súper
      o en el gimnasio, a veces no. Cada escritura pasa por una cola local: si
      no sale, se guarda en el móvil y se reintenta al volver la conexión.

   2. LO PERSONAL ES PERSONAL. Comidas, medicación, peso y cierre llevan
      profile_id y las políticas de la base solo dejan escribir en el propio.
      Lo de la casa —descongelar algo, preparar los túper, la tanda— va a
      shared_checks y lo ve el otro al momento.
   ═══════════════════════════════════════════════════════════════════════════ */

const COLA = 'tyc_cola_v1';
const leerCola  = () => { try { return JSON.parse(localStorage.getItem(COLA) || '[]'); }
                          catch { return []; } };
const guardarCola = c => { try { localStorage.setItem(COLA, JSON.stringify(c.slice(-200))); } catch {} };

/* La operación se describe con datos, no con una función: así se puede guardar
   en el móvil y repetirla tal cual cuando vuelva la conexión. */
async function escribir(op){
  if (!TYC.db) return {error:'sin base'};
  if (!navigator.onLine){ encolar(op); return {encolada:true}; }
  const r = await ejecutar(op);
  if (r.error){ encolar(op); avisoCola(); }
  return r;
}

async function ejecutar(op){
  const t = TYC.db.from(op.tabla);
  if (op.tipo === 'borrar'){
    let q = t.delete();
    for (const [k, v] of Object.entries(op.donde)) q = q.eq(k, v);
    return await q;
  }
  return await t.upsert(op.fila, op.conflicto ? {onConflict: op.conflicto} : undefined);
}

function encolar(op){ const c = leerCola(); c.push({...op, t: Date.now()}); guardarCola(c); pintarCola(); }

async function vaciarCola(){
  const cola = leerCola();
  if (!cola.length || !navigator.onLine || !TYC.db) return 0;
  const quedan = [];
  for (const op of cola){ const r = await ejecutar(op); if (r.error) quedan.push(op); }
  guardarCola(quedan);
  pintarCola();
  return cola.length - quedan.length;
}
window.addEventListener('online', () => vaciarCola().then(n => { if (n) recargarDia(); }));

/* Que se vea cuántas cosas están esperando: una cola invisible es una cola en
   la que nadie confía. */
function pintarCola(){
  const n = leerCola().length;
  const el = document.getElementById('aviso-cola');
  if (!el) return;
  el.innerHTML = n ? `<div class="banner" style="margin-bottom:11px"><b class="t">${n} ${
    n===1?'cosa sin enviar':'cosas sin enviar'}</b>
    Se han guardado en este móvil y se envían solas cuando vuelva la conexión.</div>` : '';
}
const avisoCola = pintarCola;

const hoyISO = () => isoDe(0);

/* ── comidas ───────────────────────────────────────────────────────────────
   El momento es la clave: una comida por momento y día. Volver a marcarla
   pisa la anterior en vez de duplicarla. */
async function guardarComida(momApp, estado, claveAlt){
  const fila = {
    profile_id: SESION.id, fecha: hoyISO(),
    momento: MOM_BD[momApp] || momApp,
    estado: ESTADO_BD[estado] || 'hecho'
  };
  if (claveAlt && REC_ID[claveAlt]) fila.recipe_alt_id = REC_ID[claveAlt];

  if (!navigator.onLine || !TYC.db)
    return await escribir({tabla:'meal_logs', fila, conflicto:'profile_id,fecha,momento'});

  const {data, error} = await TYC.db.from('meal_logs')
    .upsert(fila, {onConflict:'profile_id,fecha,momento'}).select('id').maybeSingle();
  if (error){ encolar({tabla:'meal_logs', fila, conflicto:'profile_id,fecha,momento'});
              avisoCola(); return {error}; }

  /* Comer gasta despensa. Saltarse una comida o comer fuera, no. */
  if (data){
    if (estado === 'hecho' || estado === 'cambiado') await descontarComida(data.id, claveAlt);
    else await devolverComida(data.id);
  }
  return {data};
}
const ESTADO_BD = {hecho:'hecho', cambiado:'cambiado', fuera:'fuera', saltado:'saltado'};
const REC_ID = {};        // clave de receta → id, lo rellena el catálogo

/* ── LA DESPENSA SE GASTA ──────────────────────────────────────────────────
   Comprar sumaba a la despensa, pero comer no restaba: en unos días la
   despensa decía que había el doble de lo que hay de verdad, y la lista de la
   compra se calculaba sobre eso. Marcar una comida descuenta sus ingredientes,
   escalados a la ración de quien la marca —si comen los dos, se descuenta dos
   veces, que es lo que pasa en la sartén—.

   Cada descuento deja su rastro en pantry_movements apuntando al registro de
   la comida. Eso da dos cosas: no se descuenta dos veces si se vuelve a
   marcar, y se puede DESHACER si la comida se desmarca. */
async function descontarComida(mealLogId, clave){
  if (!mealLogId || !clave || !R[clave]) return;

  /* ¿Ya se descontó esta comida? Marcar dos veces no puede vaciar la nevera. */
  const {data: ya} = await TYC.db.from('pantry_movements')
    .select('id').eq('referencia_id', mealLogId).limit(1);
  if (ya && ya.length) return;

  const necesita = {};
  for (const [n, c, u] of R[clave].ing){
    const g = gramos(n, escala(n, c, u, P), u);
    necesita[n] = (necesita[n] || 0) + g;
  }

  const nombres = Object.keys(necesita);
  const {data: ings} = await TYC.db.from('ingredients').select('id, nombre').in('nombre', nombres);
  const idDe = Object.fromEntries((ings || []).map(i => [i.nombre, i.id]));
  const {data: hay} = await TYC.db.from('pantry')
    .select('id, ingredient_id, cantidad').in('ingredient_id', Object.values(idDe));
  const enCasa = Object.fromEntries((hay || []).map(p => [p.ingredient_id, p]));

  const movs = [];
  for (const n of nombres){
    const ing = idDe[n]; if (!ing) continue;
    const fila = enCasa[ing];
    /* Lo que no está en la despensa no se descuenta ni se pone en negativo:
       significa que se cocinó con algo que la app no sabía que había. Se anota
       el movimiento igual, para que el ajuste mensual lo vea. */
    const gasto = Math.min(necesita[n], fila ? +fila.cantidad : 0);
    if (fila){
      const resto = +fila.cantidad - gasto;
      if (resto <= 0) await TYC.db.from('pantry').delete().eq('id', fila.id);
      else await TYC.db.from('pantry').update({cantidad: resto,
        actualizado_at: new Date().toISOString()}).eq('id', fila.id);
    }
    movs.push({household_id: SESION.household, ingredient_id: ing,
      cantidad: -necesita[n], origen: 'comida', motivo: 'comida',
      referencia_id: mealLogId});
  }
  if (movs.length) await TYC.db.from('pantry_movements').insert(movs);
  await hidratarDespensa();
}

/* Y al revés: si la comida se desmarca, lo descontado vuelve. */
async function devolverComida(mealLogId){
  if (!mealLogId) return;
  const {data: movs} = await TYC.db.from('pantry_movements')
    .select('id, ingredient_id, cantidad').eq('referencia_id', mealLogId);
  if (!movs || !movs.length) return;
  const {data: hay} = await TYC.db.from('pantry')
    .select('id, ingredient_id, cantidad').in('ingredient_id', movs.map(m => m.ingredient_id));
  const enCasa = Object.fromEntries((hay || []).map(p => [p.ingredient_id, p]));
  for (const m of movs){
    const vuelve = Math.abs(+m.cantidad);
    const fila = enCasa[m.ingredient_id];
    if (fila) await TYC.db.from('pantry').update({cantidad: +fila.cantidad + vuelve,
      actualizado_at: new Date().toISOString()}).eq('id', fila.id);
    else await TYC.db.from('pantry').insert({household_id: SESION.household,
      ingredient_id: m.ingredient_id, cantidad: vuelve, unidad: 'g', origen: 'ajuste'});
  }
  await TYC.db.from('pantry_movements').delete().eq('referencia_id', mealLogId);
  await hidratarDespensa();
}

/* ── medicación ────────────────────────────────────────────────────────────
   Se guarda también cuando se DESMARCA (tomada = false): que no haya fila es
   «no lo sé», y que la haya en false es «no la tomé». No es lo mismo. */
async function guardarMed(i, tomada){
  const m = MEDICACION[P][i];
  if (!m || !m.id) return {error:'medicación sin id'};
  return await escribir({tabla:'medication_logs', conflicto:'medication_id,fecha,momento',
    fila:{medication_id:m.id, fecha:hoyISO(), momento:m.mom || 'desayuno', tomada:!!tomada}});
}

/* ── peso y cintura ────────────────────────────────────────────────────────── */
async function guardarPesoBD(kg){
  const r = await escribir({tabla:'weight_logs', conflicto:'profile_id,fecha',
    fila:{profile_id:SESION.id, fecha:hoyISO(), peso_kg:kg}});
  const serie = SESION.perfil === 'c' ? PESO_C : PESO_T;
  serie.push(+kg);
  return r;
}
async function guardarCinturaBD(cm){
  const r = await escribir({tabla:'measurements', conflicto:'profile_id,fecha',
    fila:{profile_id:SESION.id, fecha:hoyISO(), cintura_cm:cm}});
  CINTURA[SESION.perfil].push(+cm);
  CINTURA_ULT_F = hoyISO();
  return r;
}

/* ── cierre del día ───────────────────────────────────────────────────────── */
async function guardarCierre(d){
  const r = await escribir({tabla:'daily_close', conflicto:'profile_id,fecha',
    fila:{profile_id:SESION.id, fecha:hoyISO(),
          hambre:d.hambre, energia:d.energia, sueno:d.sueno,
          pasos:d.pasos ?? null, alcohol:d.alcohol ?? null, nota:d.nota || null}});
  if (d.pasos != null) PASOS[SESION.perfil] = d.pasos;
  return r;
}

/* ── lo de la casa ─────────────────────────────────────────────────────────
   Descongelar algo, preparar los túper, la tanda del domingo. Lleva quién lo
   marcó porque «¿lo has sacado tú?» debería ser un dato y no una conversación. */
async function guardarCheck(clave, estado){
  if (estado === null){
    return await escribir({tabla:'shared_checks', tipo:'borrar',
      donde:{household_id:SESION.household, fecha:hoyISO(), clave}});
  }
  return await escribir({tabla:'shared_checks', conflicto:'household_id,fecha,clave',
    fila:{household_id:SESION.household, fecha:hoyISO(), clave, estado,
          marcado_por:SESION.id, marcado_at:new Date().toISOString()}});
}

/* ── entrenamiento ─────────────────────────────────────────────────────────
   La sesión hecha, y las series con sus repeticiones y kilos: sin las series
   no hay progresión de cargas, que es lo único que dice si el bloque funciona. */
async function guardarEntreno(estado, series, fin){
  const fila = {profile_id:SESION.id, fecha:hoyISO(), estado};
  if (fin){
    fila.rpe = fin.rpe || null;
    /* La molestia se guarda en las notas: `motivo_fallo` es para cuando la
       sesión NO se hace, y esto es una sesión hecha con una molestia. */
    if (fin.molestia && fin.molestia !== 'Ninguna') fila.notas = 'Molestia: ' + fin.molestia;
  }
  /* upsert POR PERSONA Y DÍA. Sin esto cada marca creaba otra fila —marcar la
     sesión desde Hoy y luego terminarla dejaba dos— y al leerlas la app pedía
     «una sola» y recibía un error: la sesión aparecía como no hecha al volver
     a abrir. Es lo que pasó con la sesión de Cristina. */
  const {data, error} = await TYC.db.from('workout_logs')
    .upsert(fila, {onConflict:'profile_id,fecha'}).select('id').maybeSingle();
  if (error){ encolar({tabla:'workout_logs', fila}); avisoCola(); return {error}; }
  if (data && series && series.length){
    await TYC.db.from('set_logs').delete().eq('workout_log_id', data.id);
    /* Se guarda el nombre del ejercicio en las notas de la serie: el catálogo
       de sesiones aún no está en la base, y sin el nombre las series no dicen
       nada cuando se miren dentro de dos meses. */
    await TYC.db.from('set_logs').insert(series.map((s, i) => ({
      workout_log_id:data.id, serie_num:i+1,
      reps:s.reps ?? null, peso_kg:s.kg ?? null, completada:true,
      distancia_km:null, tiempo_seg:null})));
  }
  return {data};
}

async function guardarCardioBD(nombre, minutos, hecha, imparte, rpe){
  return await escribir({tabla:'unplanned_activities',
    fila:{profile_id:SESION.id, fecha:hoyISO(), tipo:nombre,
          duracion_min:minutos || 30,
          intensidad: rpe >= 8 ? 'alta' : rpe <= 4 ? 'suave' : 'normal',
          /* Dirigir un entreno no es entrenar: se guarda, pero marcado, para
             que no cuente como sesión propia en la adherencia. */
          es_actividad_profesional: !!imparte,
          notas: hecha ? 'hecha' : 'elegida'}});
}

/* Las analíticas. La tabla estaba desde el principio y no había forma de meter
   una: el formulario era una maqueta con los campos muertos. Cuatro veces al
   año se teclean ocho números; automatizarlo no compensa, pero perderlos sí
   duele. */
async function guardarAnaliticaBD({fecha, quien, valores}){
  /* Solo se puede guardar la propia: la política de la tabla lo exige, y
     tampoco tendría sentido meter la analítica del otro desde aquí. */
  if (quien !== SESION.perfil)
    return {error:'cada uno registra la suya desde su móvil'};

  const {data: rep, error} = await TYC.db.from('lab_reports')
    .insert({profile_id:SESION.id, fecha_muestra:fecha, laboratorio:'Echevarne'})
    .select('id').maybeSingle();
  if (error || !rep) return {error: error || 'no se ha creado el informe'};

  const UNIDAD = {'Glucosa':'mg/dL','HbA1c':'%','Colesterol':'mg/dL','ALT (GPT)':'U/L',
    'GGT':'U/L','Vitamina D':'ng/mL','Ferritina':'ng/mL','Ácido úrico':'mg/dL',
    'Creatinina':'mg/dL','LDL':'mg/dL','HDL':'mg/dL','Insulina':'µU/mL'};
  const filas = Object.entries(valores).map(([m, v]) => ({
    lab_report_id: rep.id, marcador: m, valor: v, unidad: UNIDAD[m] || ''}));
  if (filas.length) await TYC.db.from('lab_markers').insert(filas);
  await hidratarAnaliticas();
  return {ok:true};
}

/* Y leerlas: dos informes se convierten en la tabla con flechas de evolución,
   que es lo único que hace útil una analítica. */
async function hidratarAnaliticas(){
  const {data: reps, error} = await TYC.db.from('lab_reports')
    .select('id, fecha_muestra').order('fecha_muestra');
  if (error) throw error;
  LABS_EVO.length = 0;
  if (!reps || !reps.length) return 0;

  const ids = reps.map(r => r.id);
  const {data: marks} = await TYC.db.from('lab_markers')
    .select('lab_report_id, marcador, valor, unidad').in('lab_report_id', ids);
  if (!marks || !marks.length) return 0;

  const primero = reps[0].id, ultimo = reps[reps.length - 1].id;
  const REF = {'Glucosa':'74-106','HbA1c':'4,3-6,1','Colesterol':'<200','ALT (GPT)':'10-49',
    'GGT':'<38','Vitamina D':'30-100','Ferritina':'10-291','Ácido úrico':'3,1-7,8'};
  const BAJA = ['Glucosa','HbA1c','Colesterol','ALT (GPT)','GGT','Ácido úrico'];
  const nombres = [...new Set(marks.map(m => m.marcador))];
  for (const n of nombres){
    const a = marks.find(m => m.marcador === n && m.lab_report_id === primero);
    const b = reps.length > 1 ? marks.find(m => m.marcador === n && m.lab_report_id === ultimo) : null;
    LABS_EVO.push([n, a ? +a.valor : null, b ? +b.valor : null,
      REF[n] || '—', (a || b || {}).unidad || '',
      BAJA.includes(n) ? 'baja' : n === 'Vitamina D' ? 'sube' : '—']);
  }
  return LABS_EVO.length;
}

/* LA PANTALLA DE SALUD, con datos de verdad.
   El bienestar y la adherencia a la medicación se pintaban desde arrays que
   nadie rellenaba: decía «sin cierres todavía» aunque hubiera cierres, y
   «todavía no hay días marcados» con la medicación marcada. Ahora se leen. */
async function hidratarSalud(){
  const yo = SESION.perfil;
  const hace8sem = new Date(); hace8sem.setDate(hace8sem.getDate() - 56);
  const desde = isoLocal(hace8sem);

  /* Bienestar: un punto por cierre, de más antiguo a más reciente. */
  const {data: cierres} = await TYC.db.from('daily_close')
    .select('fecha, hambre, energia, sueno').gte('fecha', desde).order('fecha');
  ['hambre','energia','sueno'].forEach(k => { BIENESTAR[yo][k].length = 0; });
  for (const c of (cierres || [])){
    if (c.hambre)  BIENESTAR[yo].hambre.push(c.hambre);
    if (c.energia) BIENESTAR[yo].energia.push(c.energia);
    if (c.sueno)   BIENESTAR[yo].sueno.push(c.sueno);
  }

  /* Adherencia a la medicación: días marcados sobre días desde que se empezó.
     Con menos de tres días no se enseña porcentaje: no significaría nada. */
  const {data: meds} = await TYC.db.from('medications')
    .select('id, nombre, dosis, momentos').eq('activa', true);
  MED_ADH[yo].length = 0;
  if (meds && meds.length){
    const {data: marcas} = await TYC.db.from('medication_logs')
      .select('medication_id, fecha, tomada').gte('fecha', desde).eq('tomada', true);
    const dias = new Set((marcas || []).map(m => m.fecha));
    const total = Math.max(1, dias.size);
    if (dias.size >= 3){
      for (const m of meds){
        const suyas = new Set((marcas || [])
          .filter(x => x.medication_id === m.id).map(x => x.fecha));
        MED_ADH[yo].push({
          n: m.nombre + (m.dosis ? ' ' + m.dosis : ''),
          pct: Math.round(100 * suyas.size / total)});
      }
    }
  }

  /* Adherencia semanal y días en rango: se calculan sobre semanas completas.
     Sin una semana cerrada no hay barra que pintar, y eso ya lo dice la
     pantalla en vez de inventar un porcentaje. */
  return (cierres || []).length;
}

/* LO QUE HAY GUARDADO, tal cual está en la base.
   No pinta lo que la app cree recordar: consulta y devuelve lo que hay. Si una
   cosa no sale aquí, no está guardada, y eso es exactamente lo que hay que
   poder comprobar sin preguntarle a nadie. */
async function leerRegistros(){
  try {
    const hoy = hoyISO();
    const hace7 = new Date(); hace7.setDate(hace7.getDate() - 7);
    const desde = isoLocal(hace7);
    const hora = t => t ? new Date(t).toLocaleTimeString('es-ES',
      {hour:'2-digit', minute:'2-digit'}) : '';
    const dia = f => { const d = new Date(f + 'T12:00');
      return `${d.getDate()} ${['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][d.getMonth()]}`; };

    /* allSettled, no all: si una consulta falla, las otras siguen. Antes un
       fallo en cualquiera dejaba la pantalla vacía sin decir en cuál. */
    const partes = await Promise.allSettled([
      TYC.db.from('meal_logs').select('momento, estado, registrado_at').eq('fecha', hoy),
      TYC.db.from('medications').select('id, nombre').eq('activa', true),
      TYC.db.from('medication_logs').select('medication_id, tomada, momento').eq('fecha', hoy),
      TYC.db.from('weight_logs').select('fecha, peso_kg').gte('fecha', desde).order('fecha', {ascending:false}),
      TYC.db.from('daily_close').select('fecha, hambre, energia, sueno, pasos, cerrado_at')
        .gte('fecha', desde).order('fecha', {ascending:false}),
      TYC.db.from('workout_logs').select('id, fecha, estado, rpe').gte('fecha', desde).order('fecha', {ascending:false}),
      TYC.db.from('set_logs').select('workout_log_id, reps, peso_kg'),
      TYC.db.from('extra_logs').select('nombre, cantidad').eq('fecha', hoy),
      /* La relación se nombra por su columna. Sin el alias, PostgREST no sabe
         por qué camino llegar a profiles y devuelve error: una sola consulta
         mal escrita dejaba la pantalla entera en blanco. */
      TYC.db.from('shared_checks').select('clave, estado, profiles:marcado_por(nombre)').eq('fecha', hoy)
    ]);
    const fallos = [];
    const sacar = (i, nombre) => {
      const p = partes[i];
      if (p.status === 'rejected'){ fallos.push(`${nombre}: ${p.reason?.message || p.reason}`); return {data: []}; }
      if (p.value?.error){ fallos.push(`${nombre}: ${p.value.error.message}`); return {data: []}; }
      return p.value;
    };
    const comidas = sacar(0, 'comidas'), meds = sacar(1, 'medicación'),
          medLogs = sacar(2, 'medicación marcada'), pesos = sacar(3, 'pesos'),
          cierres = sacar(4, 'cierres'), entrenos = sacar(5, 'entrenos'),
          series = sacar(6, 'series'), extras = sacar(7, 'extras'),
          checks = sacar(8, 'checks de casa');

    const idMed = Object.fromEntries((meds.data || []).map(m => [m.id, m.nombre]));
    const porSesion = {};
    for (const s of (series.data || []))
      porSesion[s.workout_log_id] = (porSesion[s.workout_log_id] || 0) + 1;

    const ESTADO = {hecho:'✓ hecha', cambiado:'↔ cambiada', fuera:'🍽 fuera', saltado:'⏭ saltada'};
    const NIVEL = ['', 'bajo', 'normal', 'alto'];

    return {bloques: [
      {titulo:'Comidas de hoy', filas: (comidas.data || []).map(c => ({
        qué: `${MOMLAB[MOM_APP[c.momento] || c.momento] || c.momento} · ${ESTADO[c.estado] || c.estado}`,
        cuándo: hora(c.registrado_at)}))},

      {titulo:'Medicación de hoy', filas: (medLogs.data || []).map(m => ({
        qué: `${idMed[m.medication_id] || 'medicación'} · ${m.tomada ? '✓ tomada' : '✗ no tomada'}`,
        cuándo: m.momento || ''}))},

      {titulo:'Entrenamiento · últimos 7 días', filas: (entrenos.data || []).map(e => ({
        qué: `${e.estado}${e.rpe ? ' · esfuerzo ' + e.rpe : ''}${
          porSesion[e.id] ? ' · ' + porSesion[e.id] + ' series' : ' · sin series'}`,
        cuándo: dia(e.fecha)}))},

      {titulo:'Peso · últimos 7 días', filas: (pesos.data || []).map(p => ({
        qué: `${(+p.peso_kg).toFixed(1).replace('.', ',')} kg`, cuándo: dia(p.fecha)}))},

      {titulo:'Cierres del día', filas: (cierres.data || []).map(c => ({
        qué: `hambre ${NIVEL[c.hambre] || '—'} · energía ${NIVEL[c.energia] || '—'} · sueño ${
          NIVEL[c.sueno] || '—'}${c.pasos ? ' · ' + c.pasos.toLocaleString('es') + ' pasos' : ''}`,
        cuándo: dia(c.fecha) + ' ' + hora(c.cerrado_at)}))},

      {titulo:'Fuera del plan · hoy', filas: (extras.data || []).map(x => ({
        qué: `${x.nombre}${x.cantidad > 1 ? ' ×' + x.cantidad : ''}`, cuándo: ''}))},

      {titulo:'De la casa · hoy', filas: (checks.data || []).map(c => ({
        qué: c.clave.replace(/^desc_/, 'sacar del congelador: ').replace(/^rutina_./, 'rutina diaria'),
        cuándo: c.profiles?.nombre || ''}))},
    ], fallos};
  } catch(e){
    return {error: e.message || String(e)};
  }
}

/* La dirección de este móvil para recibir avisos. Se guarda una por teléfono:
   si Cristina entra desde el suyo y Tama desde el suyo, cada uno recibe los
   propios. Vuelve a guardarse en cada activación por si el navegador rota la
   dirección, que lo hace de vez en cuando. */
async function guardarPush(sub){
  return await escribir({tabla:'push_subscriptions', conflicto:'endpoint',
    fila:{profile_id:SESION.id, endpoint:sub.endpoint, p256dh:sub.p256dh,
          auth:sub.auth, dispositivo:sub.dispositivo, caducada:false}});
}

/* El rango calórico, cuando se ajusta por hambre alta. Es un cambio del perfil
   y tiene que sobrevivir: de él dependen las raciones de todas las recetas. */
async function guardarRango(kcalMin, kcalMax){
  return await escribir({tabla:'profiles', conflicto:'id',
    fila:{id:SESION.id, kcal_min:kcalMin, kcal_max:kcalMax}});
}

/* ── el historial de compras ────────────────────────────────────────────────
   Las compras cerradas se guardaban en la base pero NADIE las volvía a leer:
   la lista de «últimas compras» era un array en memoria, así que al cerrar la
   app la compra desaparecía del historial aunque el gasto estuviera guardado.
   Es de lo más desmoralizante que puede hacer una app: registras algo y al
   volver no está. */
const FID_APP = {exacta:'exacta', desde_lista:'lista', solo_gasto:'gasto'};
async function hidratarCompras(){
  const {data, error} = await TYC.db.from('tickets')
    .select('id, fecha_compra, comercio, total, fidelidad, estado')
    .order('fecha_compra', {ascending:false}).limit(20);
  if (error) throw error;
  COMPRAS.length = 0;
  for (const t of (data || [])){
    COMPRAS.push({
      id: t.id, sitio: t.comercio || 'Otro',
      fecha: fechaCorta(t.fecha_compra),
      total: +t.total || 0,
      fid: FID_APP[t.fidelidad] || 'gasto',
      lineas: null, pendientes: 0
    });
  }
  return COMPRAS.length;
}

/* Registrar a mano una compra que no pasó por la lista: la del súper de al
   lado, la que se cerró antes de que la app guardara nada, la del mercado. */
async function guardarCompraSuelta({comercio, total, fecha}){
  const r = await escribir({tabla:'tickets', fila:{
    household_id: SESION.household, fecha_compra: fecha || hoyISO(),
    comercio, total, estado:'confirmado', fidelidad:'solo_gasto', via:'manual'}});
  await hidratarCompras();
  return r;
}

/* ── las puntuaciones de los platos ─────────────────────────────────────────
   Se leen las de los DOS: el menú es común, así que un plato que cualquiera de
   los dos ha marcado con 👎 tiene que dejar de proponerse. Se escriben solo las
   propias, que para eso son opiniones. */
async function hidratarPuntuaciones(){
  const {data, error} = await TYC.db.from('recipe_ratings')
    .select('valor, profile_id, recipes(clave)');
  if (error) throw error;
  vaciar(PUNT);
  for (const r of (data || [])){
    const k = r.recipes?.clave; if (!k) continue;
    /* Un 👎 de cualquiera manda sobre el 👍 del otro: si a uno no le gusta, esa
       cena no vuelve a la mesa. */
    if (PUNT[k] === 'no') continue;
    if (r.valor === 'no' || r.profile_id === SESION.id) PUNT[k] = r.valor;
    else if (!PUNT[k]) PUNT[k] = r.valor;
  }
  GUARDAR_PUNT = guardarPuntuacion;
  return Object.keys(PUNT).length;
}

async function guardarPuntuacion(clave, valor){
  const id = REC_ID[clave];
  if (!id) return {error:'receta sin id'};
  if (!valor){
    return await escribir({tabla:'recipe_ratings', tipo:'borrar',
      donde:{profile_id:SESION.id, recipe_id:id}});
  }
  return await escribir({tabla:'recipe_ratings', conflicto:'profile_id,recipe_id',
    fila:{profile_id:SESION.id, recipe_id:id, valor, puntuado_at:new Date().toISOString()}});
}

/* ── cerrar la compra ───────────────────────────────────────────────────────
   Cerrar la lista no era suficiente: lo comprado tiene que ENTRAR EN LA
   DESPENSA. Si no, la despensa se queda como estaba, el menú de la semana
   siguiente vuelve a pedir lo mismo y la lista repite productos que ya están
   en casa. Esto es lo que cierra el círculo compra → despensa → menú. */
async function cerrarCompraBD(datos){
  const {tipo, comercio, total, cogidos} = datos;
  const listaId = LISTA_ID[tipo] || null;

  /* 1 · el ticket: el gasto, con su nivel de fidelidad. */
  const {data: tk} = await TYC.db.from('tickets').insert({
    household_id: SESION.household, fecha_compra: hoyISO(),
    comercio, total, estado: 'confirmado',
    fidelidad: 'desde_lista', via: 'manual',
    shopping_list_id: listaId
  }).select('id').maybeSingle();

  /* 2 · a la despensa. Lo que ya estaba se SUMA, no se sustituye: si quedaban
     200 g de arroz y entran 1000, hay 1200, no 1000. */
  const {data: ings} = await TYC.db.from('ingredients').select('id, nombre');
  const idIng = Object.fromEntries((ings || []).map(i => [i.nombre, i.id]));
  const {data: hay} = await TYC.db.from('pantry').select('id, ingredient_id, cantidad');
  const enCasa = Object.fromEntries((hay || []).map(p => [p.ingredient_id, p]));

  for (const c of cogidos){
    const ing = idIng[c.n]; if (!ing) continue;
    const previo = enCasa[ing];
    if (previo){
      await TYC.db.from('pantry').update({cantidad: +previo.cantidad + c.g,
        actualizado_at: new Date().toISOString()}).eq('id', previo.id);
    } else {
      await TYC.db.from('pantry').insert({household_id: SESION.household,
        ingredient_id: ing, cantidad: c.g, unidad: 'g', origen: 'ticket'});
    }
    /* El movimiento deja el rastro: cuánto entró, cuándo y de qué compra. */
    await TYC.db.from('pantry_movements').insert({household_id: SESION.household,
      ingredient_id: ing, cantidad: c.g, origen: 'ticket',
      motivo: 'ticket', referencia_id: tk ? tk.id : null});
  }

  /* 3 · la lista se cierra, y lo que no se compró NO se pierde: pasa a una
     lista nueva. Si no, «lo compro el jueves» equivale a olvidarlo. */
  await cerrarListaBD(tipo);
  if (datos.pendientes && datos.pendientes.length){
    const {data: nueva} = await TYC.db.from('shopping_lists')
      .insert({household_id: SESION.household, tipo, estado: 'abierta'})
      .select('id').maybeSingle();
    if (nueva){
      LISTA_ID[tipo] = nueva.id;
      const filas = datos.pendientes.map(i => ({
        shopping_list_id: nueva.id, ingredient_id: idIng[i.n],
        cantidad: Math.round(i.g), unidad: 'g', seccion_super: i.sec,
        envases: i.envases, formato_g: i.formato
      })).filter(f => f.ingredient_id);
      if (filas.length) await TYC.db.from('shopping_items').insert(filas);
    }
  }

  /* Y a partir de aquí, la despensa y la lista que se ven son las nuevas. */
  await hidratarDespensa();
  await leerMarcas();
  await hidratarCompras();
  return {ok:true};
}

/* ── leer lo que ya está registrado hoy ─────────────────────────────────────
   Sin esto, abrir la app por la tarde enseñaría el día en blanco aunque el
   desayuno estuviera marcado desde las ocho. */
async function hidratarDia(off){
  /* El día que se está mirando. Al ir a «ayer» hay que traer lo de ayer: antes
     se leía siempre hoy, así que los días anteriores salían vacíos aunque
     estuvieran registrados. */
  const f = isoDe(off ?? DIA ?? 0);

  /* SE EMPIEZA EN LIMPIO. Todo lo que hay en ACC —el cierre, la sesión hecha,
     la rutina, los checks de la casa— es de UN día concreto. Al mirar ayer se
     cargaba encima de lo de hoy sin borrar, y al volver hoy heredaba el cierre
     y la sesión de ayer: la app decía que habías entrenado cuando no. */
  vaciar(ACC);
  CIERRE_HOY = null;
  NOTA = '';
  /* Los pasos también son de un día concreto: si hoy no hay cierre, no se
     heredan los de ayer. Salía una barra con 4.015 pasos que nadie había
     registrado hoy. */
  PASOS[SESION.perfil] = 0;

  /* Igual que en «qué hay registrado»: si una de estas cinco consultas falla,
     las otras cuatro tienen que seguir. Que un fallo al leer los checks de la
     casa borre las comidas marcadas del día es exactamente el tipo de cosa que
     hace desconfiar de toda la app. */
  const res = await Promise.allSettled([
    TYC.db.from('meal_logs').select('id, momento, estado').eq('fecha', f),
    TYC.db.from('medication_logs').select('medication_id, momento, tomada').eq('fecha', f),
    TYC.db.from('shared_checks').select('clave, estado, profiles:marcado_por(nombre)').eq('fecha', f),
    TYC.db.from('daily_close').select('*').eq('fecha', f).maybeSingle(),
    /* limit(1) en vez de «una sola»: si por lo que sea hubiera dos filas del
       mismo día, se coge una y se sigue, en vez de romperse. */
    TYC.db.from('workout_logs').select('estado').eq('fecha', f).limit(1)
  ]);
  const ok = i => (res[i].status === 'fulfilled' && !res[i].value?.error)
    ? res[i].value : {data: null};
  const comidas = ok(0), medic = ok(1), checks = ok(2), cierre = ok(3), entreno = ok(4);
  res.forEach((r, i) => {
    const e = r.status === 'rejected' ? r.reason : r.value?.error;
    if (e) console.warn('[T&C] lo de hoy, consulta ' + i + ':', e.message || e);
  });

  for (const c of (comidas.data || [])){
    const m = MOM_APP[c.momento] || c.momento;
    const fila = HOY[P].find(x => x.k === m);
    if (fila) fila.estado = c.estado === 'sin_registrar' ? null : c.estado;
  }

  MED[P] = MEDICACION[P].map(m =>
    (medic.data || []).some(x => x.medication_id === m.id && x.momento === m.mom && x.tomada));

  for (const ch of (checks.data || [])) ACC[ch.clave] = ch.estado;

  if (cierre.data){
    const c = cierre.data;
    if (c.pasos != null) PASOS[SESION.perfil] = c.pasos;
    if (c.nota) NOTA = c.nota;
    CIERRE_HOY = {hambre:c.hambre, energia:c.energia, sueno:c.sueno,
                  pasos:c.pasos, alcohol:c.alcohol, nota:c.nota};
    ACC.cierre = 'hecho';
  }
  const ent = Array.isArray(entreno.data) ? entreno.data[0] : entreno.data;
  if (ent && ent.estado === 'hecha') ACC.sesion = 'hecho';

  /* Las comidas marcadas ANTES de que existiera el descuento no gastaron nada
     de la despensa. Al abrir la app se ponen al día: el descuento comprueba si
     ya se hizo, así que esto no descuenta dos veces. */
  for (const c of (comidas.data || [])){
    if (c.estado !== 'hecho' && c.estado !== 'cambiado') continue;
    const m = MOM_APP[c.momento] || c.momento;
    const fila = HOY[P].find(x => x.k === m);
    if (fila && fila.r) await descontarComida(c.id, fila.r);
  }

  return (comidas.data || []).length;
}

/* Al cambiar de día en la pantalla de Hoy hay que traer lo de ese día. */
async function cambiarDia(nuevo){
  DIA = nuevo;
  sembrarDia(HORA);
  try { await hidratarDia(DIA); } catch(e){ console.warn('[T&C] día:', e.message); }
  render();
}

/* Cuando vuelve la conexión y se vacía la cola, lo que se ve tiene que
   coincidir con lo que hay guardado. */
async function recargarDia(){
  try { await hidratarDia(); render(); } catch {}
}

/* Y lo de la casa, en cuanto lo marca el otro. */
function escucharCasa(){
  TYC.db.channel('casa')
    .on('postgres_changes', {event:'*', schema:'public', table:'shared_checks'},
        async () => { await hidratarDia(); render(); })
    .subscribe();
}


/* ── LO QUE FALTABA POR GUARDAR ────────────────────────────────────────────
   Barrido completo de la app: siete sitios más pintaban desde memoria sin
   escribir en la base. Se veían bien y desaparecían al cerrar. */

/* 1 · fuera del plan: la cerveza, el picoteo, el café de media mañana. */
async function guardarExtra(x){
  return await escribir({tabla:'extra_logs', fila:{
    profile_id:SESION.id, fecha:hoyISO(), nombre:x.n,
    kcal:x.kcal|0, cantidad:x.n2|1, es_alcohol:!!x.alc}});
}
async function quitarExtraBD(nombre){
  return await escribir({tabla:'extra_logs', tipo:'borrar',
    donde:{profile_id:SESION.id, fecha:hoyISO(), nombre}});
}
async function hidratarExtras(){
  const {data} = await TYC.db.from('extra_logs')
    .select('nombre, kcal, cantidad, es_alcohol').eq('fecha', hoyISO());
  EXTRA_LOG[SESION.perfil].length = 0;
  for (const x of (data || []))
    EXTRA_LOG[SESION.perfil].push({n:x.nombre, e:x.es_alcohol?'🍺':'➕',
      kcal:+x.kcal, n2:x.cantidad, alc:x.es_alcohol});
  return (data || []).length;
}

/* 2 · excepciones del menú: son de la casa y cambian la compra de los dos. */
const TIPO_EXC = {fuera:'fuera', invitados:'invitados', vacaciones:'solo'};
async function guardarExcepcionBD(e){
  const dias = diasDeSemana(e.sem === 's2' ? 1 : 0);
  const dia = dias.find(d => d.n === e.dia);
  if (!dia) return {error:'día fuera de la semana'};
  return await escribir({tabla:'meal_exceptions', conflicto:'household_id,fecha,momento',
    fila:{household_id:SESION.household, fecha:dia.iso,
          momento:MOM_BD[e.momento] || e.momento,
          tipo:TIPO_EXC[e.tipo] || 'fuera',
          comensales:e.personas || null, texto:e.txt || null}});
}
async function quitarExcepcionBD(sem, e){
  const dias = diasDeSemana(sem === 's2' ? 1 : 0);
  const dia = dias.find(d => d.n === e.fecha);
  if (!dia) return;
  const mom = Object.keys(MOMLAB).find(k => MOMLAB[k] === e.momento) || 'cena';
  return await escribir({tabla:'meal_exceptions', tipo:'borrar',
    donde:{household_id:SESION.household, fecha:dia.iso, momento:MOM_BD[mom] || mom}});
}
async function hidratarExcepciones(){
  const {data, error} = await TYC.db.from('meal_exceptions')
    .select('fecha, momento, tipo, comensales, texto');
  if (error) throw error;
  EXCEPCIONES.s1.length = 0; EXCEPCIONES.s2.length = 0;
  const LARGO = {L:'Lunes',M:'Martes',X:'Miércoles',J:'Jueves',V:'Viernes',S:'Sábado',D:'Domingo'};
  for (const x of (data || [])){
    for (const [sem, off] of [['s1',0],['s2',1]]){
      const d = diasDeSemana(off).find(dd => dd.iso === x.fecha);
      if (!d) continue;
      const mom = MOM_APP[x.momento] || x.momento;
      EXCEPCIONES[sem].push({fecha:d.n, dia:LARGO[d.d], momento:MOMLAB[mom],
        tipo:x.tipo === 'solo' ? 'vacaciones' : x.tipo,
        txt:x.texto || '', personas:x.comensales || 2});
    }
  }
  return EXCEPCIONES.s1.length + EXCEPCIONES.s2.length;
}

/* 3 · lo que entra sin ticket: huerta, regalo, la frutería de la esquina. */
async function guardarDespensaBD(a){
  const {data: ing} = await TYC.db.from('ingredients')
    .select('id').eq('nombre', a.n).maybeSingle();
  if (!ing) return {error:'ingrediente desconocido'};
  const ORIG = {huerta:'huerta', regalo:'regalo', otra:'otra_tienda', pesca:'pesca'};
  /* Un ingrediente puede tener VARIAS filas en despensa, una por caducidad.
     Pedir «una sola» devolvía error y el alta se perdía en silencio. */
  const {data: filas} = await TYC.db.from('pantry')
    .select('id, cantidad, caducidad').eq('ingredient_id', ing.id)
    .order('caducidad', {ascending:true}).limit(1);
  const fila = (filas || [])[0];
  if (fila){
    await TYC.db.from('pantry').update({cantidad:+fila.cantidad + a.g,
      caducidad:a.cad, actualizado_at:new Date().toISOString()}).eq('id', fila.id);
  } else {
    await TYC.db.from('pantry').insert({household_id:SESION.household,
      ingredient_id:ing.id, cantidad:a.g, unidad:'g', caducidad:a.cad,
      origen:ORIG[a.origen] || 'otra_tienda',
      precio_referencia:PRECIO[a.n] || null});
  }
  await TYC.db.from('pantry_movements').insert({household_id:SESION.household,
    ingredient_id:ing.id, cantidad:a.g, origen:ORIG[a.origen] || 'otra_tienda',
    motivo:'espontaneo'});
  await hidratarDespensa();
  return {ok:true};
}

/* 4 · conservar antes de que caduque, o regalarlo. */
async function guardarConservaBD(c){
  const {data: ing} = await TYC.db.from('ingredients')
    .select('id').eq('nombre', c.n).maybeSingle();
  if (!ing) return {error:'ingrediente desconocido'};

  if (c.metodo === 'regalado'){
    await TYC.db.from('pantry').delete().eq('ingredient_id', ing.id);
    await TYC.db.from('pantry_movements').insert({household_id:SESION.household,
      ingredient_id:ing.id, cantidad:-c.g, origen:'ajuste', motivo:'regalado'});
  } else {
    await TYC.db.from('preserves').insert({household_id:SESION.household,
      ingredient_id:ing.id, metodo:c.metodo, cantidad:c.g,
      caducidad_nueva:c.cad, nota:c.ubic || null});
    /* Lo conservado sigue estando, pero con otra caducidad y en otro sitio. */
    await TYC.db.from('pantry').update({cantidad:c.g, caducidad:c.cad,
      ubicacion:c.ubic || null, nota:c.metodo,
      actualizado_at:new Date().toISOString()}).eq('ingredient_id', ing.id);
    await TYC.db.from('pantry_movements').insert({household_id:SESION.household,
      ingredient_id:ing.id, cantidad:c.g - (c.origen || c.g), origen:'conserva',
      motivo:'conservado'});
  }
  await hidratarDespensa();
  return {ok:true};
}

/* 5 · guardar CUALQUIERA de las dos semanas. Hacía falta para la semana
   siguiente al regenerarla, y ahora también para la de esta semana cuando se
   sustituye un plato porque no había un ingrediente en el súper. */
async function guardarMenuBD(off, semana, confirmada){
  const ini = lunesISO(off);
  const {data: plan} = await TYC.db.from('meal_plans')
    .select('id').eq('semana_inicio', ini).maybeSingle();
  if (plan){
    if (confirmada) await TYC.db.from('meal_plans').update({confirmado:true}).eq('id', plan.id);
    await TYC.db.from('planned_meals').delete().eq('meal_plan_id', plan.id);
    const r = await rellenarSemana(plan.id, ini, semana);
    /* La lista de la compra se calcula sobre el menú: si el menú cambia, hay
       que añadir lo que ahora hace falta. */
    await refrescarLista();
    return r;
  }
  const r = await guardarSemana(ini, semana);
  await refrescarLista();
  return r;
}

async function refrescarLista(){
  try {
    const {data: ings} = await TYC.db.from('ingredients').select('id, nombre');
    const idIng = Object.fromEntries((ings || []).map(i => [i.nombre, i.id]));
    await completarLista(idIng, listaCompra());
    await leerMarcas();
  } catch(e){ console.warn('[T&C] no se ha podido refrescar la lista:', e.message); }
}

async function guardarSemana2(semana, confirmada){
  const ini = lunesISO(1);
  const {data: plan} = await TYC.db.from('meal_plans')
    .select('id').eq('semana_inicio', ini).maybeSingle();
  if (plan){
    if (confirmada) await TYC.db.from('meal_plans').update({confirmado:true}).eq('id', plan.id);
    await TYC.db.from('planned_meals').delete().eq('meal_plan_id', plan.id);
    return await rellenarSemana(plan.id, ini, semana);
  }
  return await guardarSemana(ini, semana);
}

/* 6 · cuánto se desvía cada súper. Se recalculaba en memoria a cada compra y
   se perdía al cerrar la app, así que el aprendizaje nunca llegaba a las tres
   compras que hacen falta para que sirva de algo. */
async function hidratarCadenas(){
  const {data, error} = await TYC.db.from('retailers')
    .select('nombre, factor, compras, es_referencia');
  if (error) throw error;
  for (const r of (data || []))
    CADENAS[r.nombre] = {factor:+r.factor, compras:r.compras, ref:r.es_referencia};
  return (data || []).length;
}
async function guardarCadena(nombre, factor, compras){
  return await escribir({tabla:'retailers', conflicto:'household_id,nombre',
    fila:{household_id:SESION.household, nombre, factor, compras}});
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
                                ['días de oficina', hidratarOficina],
                                ['historial',  hidratarHistorial],
                                ['menú',       hidratarMenu],
                                /* la compra va DESPUÉS del menú: la lista sale
                                   de lo que el menú de la casa necesita */
                                ['compra',       hidratarCompra],
                                ['puntuaciones', hidratarPuntuaciones],
                                ['compras',      hidratarCompras],
                                ['extras',       hidratarExtras],
                                ['excepciones',  hidratarExcepciones],
                                ['cadenas',      hidratarCadenas],
                                ['analíticas',   hidratarAnaliticas],
                                ['salud',        hidratarSalud]]){
      try { await fn(); }
      catch(err){ fallos.push(nombre); console.error('T&C · falla '+nombre+':', err.message||err); }
    }
    if (fallos.length) avisoParcial(fallos);
    /* Los ganchos de registro. A partir de aquí, lo que se marca se guarda. */
    GUARDAR_COMIDA  = guardarComida;
    GUARDAR_MED     = guardarMed;
    GUARDAR_PESO    = guardarPesoBD;
    GUARDAR_CINTURA = guardarCinturaBD;
    GUARDAR_CIERRE  = guardarCierre;
    GUARDAR_CHECK   = guardarCheck;
    GUARDAR_ENTRENO = guardarEntreno;
    GUARDAR_CARDIO  = guardarCardioBD;
    GUARDAR_COMPRA  = cerrarCompraBD;
    GUARDAR_GASTO     = guardarCompraSuelta;
    GUARDAR_EXTRA     = guardarExtra;
    QUITAR_EXTRA      = quitarExtraBD;
    GUARDAR_EXCEPCION = guardarExcepcionBD;
    QUITAR_EXCEPCION  = quitarExcepcionBD;
    GUARDAR_DESPENSA  = guardarDespensaBD;
    GUARDAR_CONSERVA  = guardarConservaBD;
    GUARDAR_SEMANA2   = guardarSemana2;
    GUARDAR_CADENA    = guardarCadena;
    GUARDAR_RANGO     = guardarRango;
    GUARDAR_LAB       = guardarAnaliticaBD;
    GUARDAR_MENU      = guardarMenuBD;
    GUARDAR_PUSH      = guardarPush;
    LEER_REGISTROS    = leerRegistros;
    CAMBIAR_DIA       = cambiarDia;
    escucharCasa();
    vaciarCola();

    P = yo; DISPOSITIVO = yo;
    console.log(`T&C · ${cat.ing} ingredientes · ${cat.rec} recetas · ${nd} en despensa · ${SESION.nombre}`);
    ocultarAcceso();
    sembrarDia(HORA);
    /* Lo registrado hoy va DESPUÉS de sembrar el día y de saber quién eres:
       necesita el menú cargado para saber a qué comida corresponde cada marca,
       y el perfil para no leer las del otro. */
    try { await hidratarDia(); } catch(err){ console.error('T&C · falla lo de hoy:', err.message||err); }
    render();
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
