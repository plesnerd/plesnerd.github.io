var urlsToCache = [
  '/',
  '/style.css',
  '/index.hmtl',
  '/nerd.png',
  '/manifest.json',
  '/favicon.ico',
 '/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache')
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});