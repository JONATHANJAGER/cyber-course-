/* Optional offline shell after first online visit. Bump CACHE_VERSION after edits. */
const CACHE_VERSION = 'cyber-upgrade-v1.0.0';
const ASSETS=['./','./index.html','./assets/styles.css','./assets/app.js','./assets/icon.svg','./data/course.js','./data/lessons.js','./manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_VERSION).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cyber-upgrade-')&&k!==CACHE_VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE_VERSION).then(cache=>cache.put(event.request,copy));}return res;})));});
