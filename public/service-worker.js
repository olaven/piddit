self.addEventListener('load', () => {
    console.log("load event from service worker"); 
})

self.addEventListener('fetch', () => {
    console.log("This listener is required for pwa"); 
})