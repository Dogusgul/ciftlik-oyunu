const CACHE_NAME = 'feyza-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css',     // Eğer ayrı CSS varsa
  './script.js',     // Eğer ayrı JS varsa
  // Oyunun tüm önemli dosyalarını eklemelisin
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
