const CACHE_NAME = 'offline-cache-v3';
const urlsToCache = [
  './',
  './index.html',
  'https://files.catbox.moe/jy2d8v.jpeg',
  'https://files.catbox.moe/swfw68.mp4',
  'https://files.catbox.moe/umuvyb.jpeg',
  'https://files.catbox.moe/av0bac.mp4',
  'https://files.catbox.moe/91jrjx.jpeg',
  'https://files.catbox.moe/zh9gfs.mp4',
  'https://files.catbox.moe/27afcu.jpeg',
  'https://files.catbox.moe/sef9hp.mp4',
  'https://files.catbox.moe/9hnssq.mp3'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
