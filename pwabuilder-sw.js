const ahder = 'ahder-offline-v1';
const "app.js","icon-192.png.jpg","icon-512.png.png","index.html","manifest.json","pwabuilder-sw.js","terawih.css","img/1794321873721.jpg","img/2026-ramadan-mubarak-night-moon-4k-desktop-wallpaper-311.jpg"= [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './img/icon-192.png',
  './img/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
