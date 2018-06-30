self.addEventListener('load', () => {
    console.log("load event from service worker"); 
})

self.addEventListener('fetch', () => {
    console.log("This listener is required for pwa"); 
})

const cacheName = "piddit-cache"; 
const filesToCache = ['/*']; 

// credit: https://medium.com/dev-channel/learn-how-to-build-a-pwa-in-under-5-minutes-c860ad406ed
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});