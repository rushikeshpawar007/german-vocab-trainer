// Wortschatz service worker.
// App files use NETWORK-FIRST so newly logged words show up right after a deploy,
// falling back to cache when offline. Fonts are cache-first — they never change.
const CACHE = "wortschatz-v1";
const CORE = ["./", "./index.html", "./data/words.js", "./manifest.webmanifest",
              "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

  if (isFont) {
    e.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      try {
        const res = await fetch(req);
        (await caches.open(CACHE)).put(req, res.clone());
        return res;
      } catch { return hit || Response.error(); }
    })());
    return;
  }

  if (url.origin !== location.origin) return;

  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) (await caches.open(CACHE)).put(req, res.clone());
      return res;
    } catch {
      return (await caches.match(req)) || (await caches.match("./index.html")) || Response.error();
    }
  })());
});
