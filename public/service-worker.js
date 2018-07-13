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
    console.log("This is being cached")
    event.respondWith(
        caches.open('piddit').then(cache => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request).then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});