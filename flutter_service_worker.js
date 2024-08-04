'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "395009571924a561c59a9ef551454cb0",
".git/config": "bf54ab55a98d77ab9fee17be602169cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b0e16c1d56cee99d093d3e33a6859aca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03fd57c25e604a9d38df3e9b18c46c21",
".git/logs/refs/heads/main": "03fd57c25e604a9d38df3e9b18c46c21",
".git/logs/refs/remotes/origin/main": "4f02dbf5c4d6ac9b324e2af8e9987c9f",
".git/objects/1f/93fb10f1ecb39683b3d3ff44cc48b9af6fa86d": "3e04fab996d63182506721963f309649",
".git/objects/2a/4b6738a89eabe5da448cc6d4d67ff33d934b71": "5b1a255d4123c30ed6978c405b0a1d39",
".git/objects/2d/b3eeaec7499ed8212d6e298853d5863fe72a26": "c013fa80cbfd108b90601faa89cd4b4f",
".git/objects/44/f9a97e70e9a7e09c83094e68d50ee95e8df753": "1d5f86547edabeaedd6ee9f33dd3acf7",
".git/objects/6b/e167047f9afe5e449d23e75e87912d47839aaa": "126e8fc6e00cc0b615b18d15cb95c0f4",
".git/objects/81/9e6b501563ce26f607f6106a8c51cf95375b3e": "5e4000e4b14d4003fef290486553ef79",
".git/refs/heads/main": "e06a2c5575b4644c07fa8aa1fede1636",
".git/refs/remotes/origin/main": "e06a2c5575b4644c07fa8aa1fede1636",
"assets/AssetManifest.bin": "b73312a03e88d8b3578cea45d1f9eeae",
"assets/AssetManifest.bin.json": "5c5a968b511c831d320a77d1f4d3bf8b",
"assets/AssetManifest.json": "b20483143c90bb90edca89a3f167c54c",
"assets/assets/animations/splash_loading.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"assets/assets/icons/ic_linkedin.svg": "47340279be0a97f7155b71683fa17438",
"assets/assets/lottie/lo_hello.json": "e7548c42b090cbac8d8e4542a2274536",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "143c30f2f11b48729d5f6b7302e37325",
"assets/NOTICES": "82797f7059d333c783eae9f9c27dd30e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "4c4a46204516056785c411d64298eabe",
"favicon.png": "c051275ee055bd18d5bbff356957f29c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "96ca7e503be16e64030cab8d32a1b9f9",
"icons/android-chrome-192x192.png": "9692600621a087e777c68e223f8291fd",
"icons/apple-touch-icon.png": "626f97ec3a2de5b30d2daa9bfa951409",
"icons/favicon-16x16.png": "fe64697f309c2ab68da28442cc9508be",
"icons/favicon-32x32.png": "a4a6dc160f821c551f1b1d61d135dcbf",
"index.html": "40608403fad8c9d5d5dc7ca8e384156c",
"/": "40608403fad8c9d5d5dc7ca8e384156c",
"main.dart.js": "d577bb8224ee039f81914eea176f8ab2",
"manifest.json": "dc36a3f9ea68da54b7017d1c4b6d7e79",
"robots.txt": "d120d64afbd35851612d6a5f29973c37",
"scripts/botd-1.7.1.js": "d50899af34f4d1f81012153eae74de9e",
"sitemap.xml": "80df572aa368d1fdf5e57ee9d1e931c3",
"splash/img/dark-1x.gif": "bfa66f663204e061514f97e97cc02cec",
"splash/img/dark-2x.gif": "bc006c7e64b81203bd49d6ad2f20136d",
"splash/img/dark-3x.gif": "919741bdca125b43b64a95c21f6388e4",
"splash/img/dark-4x.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"splash/img/light-1x.gif": "bfa66f663204e061514f97e97cc02cec",
"splash/img/light-2x.gif": "bc006c7e64b81203bd49d6ad2f20136d",
"splash/img/light-3x.gif": "919741bdca125b43b64a95c21f6388e4",
"splash/img/light-4x.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"version.json": "1a2a31f95cf8a765f4778a3c993f940b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
