 const CACHE_NAME = 'ahder-offline-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './terawih.css',
  './img/icon-192.png.jpg',
  './img/icon-512.png',
  './img/1794321873721.jpg',
  './img/linkedin.png',
  './img/github-logo.png',
  './img/terawih.jpg',
  './img/1821420553.webp',
  './img/pngtree-gracefull-feast-savoring-the-elegance-of-ramadan-iftar-image_15622636.jpg',
  './img/2026-ramadan-mubarak-night-moon-4k-desktop-wallpaper-311.jpg'
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
