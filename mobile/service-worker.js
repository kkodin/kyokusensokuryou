const CACHE_NAME = "m-app-001-v18";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./README_M_APP_001.txt",
  "./00_basic_input.html",
  "./01_alignment_calculation.html",
  "./02_alignment_visual.html",
  "./03_joint_opening_check.html",
  "./04_jacking_force.html",
  "./05_measurement_horizontal_error.html",
  "./鬢ｨ逕ｺ荳区ｰｴ_・掻2_19譛ｬ逶ｮ貂ｬ螳夂ｵ先棡.json",
  "./鬢ｨ逕ｺ荳区ｰｴ_・掻2_蝓ｺ邱壹ョ繝ｼ繧ｿ.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});


