const CACHE_NAME = 'itinerary-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/sg_gardens.png',
  './assets/sg_uss.png',
  './assets/kl_batu.png',
  './assets/kl_towers.png',
  './assets/kl_food.png',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
