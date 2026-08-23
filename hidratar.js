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
    .select('id, nombre, sexo, altura_cm, kcal_min, kcal_max, kcal_suelo, proteina_min_g, estado')
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

  SESION.perfil = yo; SESION.nombre = p.nombre;
  return yo;
}

/* ── la despensa real ───────────────────────────────────────────────────── */
async function hidratarDespensa(){
  const {data, error} = await TYC.db.from('pantry')
    .select('cantidad, caducidad, origen, nota, ingredients(nombre)');
  if (error) throw error;
  vaciar(DESPENSA); ESPONTANEOS.length = 0;
  for (const p of (data || [])){
    if (!p.ingredients) continue;
    DESPENSA[p.ingredients.nombre] = [+p.cantidad, p.caducidad || '2027-12-31'];
    if (p.origen && p.origen !== 'ticket')
      ESPONTANEOS.push({n:p.ingredients.nombre, g:+p.cantidad, origen:
        ({huerta:'huerta',regalo:'regalo',otra_tienda:'otra',pesca:'pesca'}[p.origen] || 'otra'),
        fecha:'—', cad:p.caducidad || '2027-12-31'});
  }
  return Object.keys(DESPENSA).length;
}

/* ── arranque ───────────────────────────────────────────────────────────── */
async function arrancarApp(){
  if (typeof supabase === 'undefined'){ return caerADemo('no se ha podido cargar la librería'); }
  TYC.db = supabase.createClient(SB.url, SB.key, {auth:{persistSession:true, autoRefreshToken:true}});

  const {data:{session}} = await TYC.db.auth.getSession();
  if (!session) return pantallaAcceso();

  try {
    SESION = {id:session.user.id, email:session.user.email, perfil:'c'};
    const yo = await hidratarPerfil();
    const cat = await hidratarCatalogo();
    const nd  = await hidratarDespensa();
    P = yo; DISPOSITIVO = yo;
    console.log(`T&C · ${cat.ing} ingredientes · ${cat.rec} recetas · ${nd} en despensa · ${SESION.nombre}`);
    ocultarAcceso(); sembrarDia(HORA); render();
  } catch (e) {
    caerADemo(e.message || e);
  }
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
