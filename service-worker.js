const CACHE_STATIC_NAME = "static-v1";
const CACHE_DYNAMIC_NAME = "dynamic-v1";

self.addEventListener("install", function (event) {
  console.log("service worker installed");

  event.waitUntil(
    caches.open(CACHE_STATI_NAME).then(function (cache) {
      console.log("hello from cashes");
      cache.addAll([
        "/index.html",
        "/src/css/bootstrap.min.css",
        "/src/images/ios/32.png",
        "/src/css/style.css",
        "/src/js/bootstrap.bundle.min.js",
        "/src/js/app.js",
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("service worker activated");

  event.waitUntil(
    caches.keys().then(function (cacheList) {
      return Promise.all(
        cacheList.map(function (key) {
          if (key != CACHE_STATIC_NAME && key != CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("service worker fetch", event);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function (res) {
          return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});
