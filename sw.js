/* ═══════════════════════════════════════════════════════════════════════════
   Service worker — hace que la app funcione sin cobertura (dentro del súper)

   Estrategia: RED PRIMERO, caché como red de seguridad.

   Dos cosas que hay que hacer bien o la app se queda congelada en una versión
   vieja, que es el fallo clásico de las PWA:

   1. Subir VERSION cada vez que cambie cualquier fichero. Al cambiar, se
      borran las cachés antiguas y se activa la nueva sin esperar.
   2. Pedir los ficheros con cache:'reload'. Sin eso, el navegador puede
      devolver su propia copia guardada —GitHub Pages manda cabeceras de 10
      minutos— y ni siquiera llega a preguntar al servidor.
   ═══════════════════════════════════════════════════════════════════════════ */
const VERSION  = 'tyc-v51-2026-09-05';
const ARCHIVOS = ['./', './index.html', './datos.js', './hidratar.js', './manifest.json',
                  './icono.svg', './icono-192.png', './icono-512.png', './icono-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      /* cache:'reload' fuerza a ir al servidor y no fiarse de lo que el
         navegador tenga guardado por su cuenta. */
      .then(c => c.addAll(ARCHIVOS.map(u => new Request(u, {cache: 'reload'}))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())   // si algo no se puede cachear, no bloquear la instalación
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  /* Solo se gestiona lo nuestro. Supabase y el CDN van directos: cachear
     respuestas de la base sería servir datos viejos, que es peor que nada. */
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request, {cache: 'no-cache'})
      .then(r => {
        const copia = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});

/* Permite forzar la actualización desde la propia app. */
self.addEventListener('message', e => { if (e.data === 'actualizar') self.skipWaiting(); });


/* Al tocar un aviso, abrir la app en vez de una pestaña nueva: si no, se
   acumulan cuatro copias de T&C abiertas al final del día. */
self.addEventListener('notificationclick', ev => {
  ev.notification.close();
  ev.waitUntil(clients.matchAll({type:'window', includeUncontrolled:true}).then(lista => {
    for (const c of lista) if (c.url.includes(self.registration.scope) && 'focus' in c) return c.focus();
    if (clients.openWindow) return clients.openWindow('./');
  }));
});


/* Los avisos que llegan con la app cerrada. El servidor manda un JSON con el
   título y el cuerpo; aquí solo se muestra. */
self.addEventListener('push', ev => {
  let d = {titulo:'T&C', cuerpo:'', clave:'tyc'};
  try { d = {...d, ...ev.data.json()}; } catch { if (ev.data) d.cuerpo = ev.data.text(); }
  ev.waitUntil(self.registration.showNotification(d.titulo, {
    body: d.cuerpo,
    icon: './icono-192.png',
    badge: './icono-192.png',
    /* La misma clave sustituye al aviso anterior en vez de apilar cuatro
       recordatorios del mismo cierre del día. */
    tag: d.clave || 'tyc',
    renotify: false,
    data: {clave: d.clave}
  }));
});
