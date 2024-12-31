self.addEventListener("install", function (event) {
  console.log("service worker installed");
});

self.addEventListener("activate", function (event) {
  console.log("service worker activated");
});
