const CACHE='daemon-riftbound-v6-castles-20261022';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('daemon-riftbound-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(event.request,cp));}return res;}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));return;}
event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(event.request,cp));}return res;}).catch(()=>caches.match('./index.html'))));
});
