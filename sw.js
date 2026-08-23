/* Service worker — hace que la app funcione sin cobertura (dentro del Mercadona)
   Estrategia: red primero, caché como red de seguridad.
   Al cambiar VERSION se descarta la caché vieja: es lo que evita quedarse
   con una versión antigua instalada, el fallo clásico de las PWA. */
const VERSION = 'tyc-v2';
const ARCHIVOS = ['./', './index.html', './datos.js', './manifest.json',
                  './icono.svg', './icono-192.png', './icono-512.png', './icono-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copia = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request))
  );
});
