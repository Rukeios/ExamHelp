// Rukeios Study service worker: lets the app install to a phone's home screen and open offline.
// Network first, so a new release shows up as soon as you're online; the cache is only the
// fallback when there's no connection. Bump CACHE to throw away old copies.
const CACHE="rukeios-v3.0.1";
const SHELL=["./","index.html","manifest.webmanifest","assets/brand/icon-192.png","assets/brand/icon-512.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET"||new URL(r.url).origin!==location.origin) return;
  e.respondWith(fetch(r).then(res=>{ if(res&&res.ok){ const copy=res.clone(); caches.open(CACHE).then(c=>c.put(r,copy)); } return res; })
    .catch(()=>caches.match(r,{ignoreSearch:false}).then(m=>m||caches.match(r,{ignoreSearch:true})).then(m=>m||(r.mode==="navigate"?caches.match("index.html"):undefined))));
});
