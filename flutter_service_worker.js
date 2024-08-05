'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
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
".git/index": "c5ee384638e05032b47154ad153a4296",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e87a38175fe38d9924cb11becffcd8c4",
".git/logs/refs/heads/main": "e87a38175fe38d9924cb11becffcd8c4",
".git/logs/refs/remotes/origin/HEAD": "f3a37bba982477a405b1445b9d9481f6",
".git/logs/refs/remotes/origin/main": "bc1dadfa01297996ac8c4596e79fe15a",
".git/objects/19/794a14dfd102c68f2cde189736ca9a196cf962": "a563335d503435eadec722a6e24a0849",
".git/objects/1b/89966d0c23ded945338575e44b12675771ceed": "597415fe477eb4d53977a682478f1680",
".git/objects/42/0d7576ba232c42f62d1096ed7c3529a303de26": "78504b46e0b0df43cdc1084fa2efa2ce",
".git/objects/4a/7acb4420dd7bb6a260da71fa3d0274d451d2ab": "9fc293089918cd62c8cb2b712a2ad7f2",
".git/objects/60/3a707197d0b9e3b7ae6ac7d0c05259df0096db": "c9aa8a4252d7c8f4f232854ec7fa14c4",
".git/objects/61/a58677c048272915492aad41000e00e87e0d38": "e24c52fae2d25afc07138f9e814cf2fe",
".git/objects/65/d33419c7c2200797719de57e7b220b87ab0347": "21b83f9ae55ba03011ded293085f39ae",
".git/objects/66/97a3661a42524a01b6b9f8406302bd78034bd9": "6b802f03a74089b37ae770c179a353b0",
".git/objects/81/ded8e563867cc3bc61044b59b39dc4b0b335ca": "d9cac96aabf867a4ff505890f41112f5",
".git/objects/83/64a3a2877c1921755161d86ac52d587091a5c8": "1179d0eb703143bb34a8d561758cd0ee",
".git/objects/8e/a4a76d61c57d0b4ca6d90f97940b28098907b9": "ed1eb89becfe108cbc6a0441fc06af3d",
".git/objects/c2/93950ca877545888e950d2d46af344ced82fab": "3af00b71f526ba74ffedfdc588cc5ebf",
".git/objects/d4/0a302add663569ae8cacc7c74df2abd7b69178": "4767b910ca875d7f584b1f3e5daf2a36",
".git/objects/d6/7d139307037c98f6acc90a1c7995974897d005": "0e6fcdf31aac5fde91f03044b20f0db0",
".git/objects/e0/cee9a2f6616f57de48d6999ea282d7f85a2cc0": "3d146232e4a7c0827fa4fdf4d716f101",
".git/objects/e2/de8561b453f74da5721af3e59198f31dd0f6c5": "5b90ade65e4bb94583745c02b098816c",
".git/objects/f1/6aa55310b7e267f21d816e9a5a457ec4ea648e": "d8ac07828663e05f2eb40e8d5839f5d4",
".git/objects/fe/368544721c795531d96a1e51d03caf5b80fd35": "71d3480dd1ba8b922692469bfcd775e1",
".git/objects/pack/pack-4226c617c63760f27fbe84d26a7be3304c584b3d.idx": "7985818a11b19fc5feaceb510d661f96",
".git/objects/pack/pack-4226c617c63760f27fbe84d26a7be3304c584b3d.pack": "e8465040d0fe8244c5f045fb9f606add",
".git/objects/pack/pack-4226c617c63760f27fbe84d26a7be3304c584b3d.rev": "b792dfcb3a549a3bda2a17b601400eee",
".git/packed-refs": "344778554d92b3c0ed996dbdd0293ff8",
".git/refs/heads/main": "dbbbf85bacfb5476c792821f18c2fea8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dbbbf85bacfb5476c792821f18c2fea8",
"assets/AssetManifest.bin": "c397bd4e62a6b0249d868d2ce8d8dcef",
"assets/AssetManifest.bin.json": "d481a4891ec591f7bd9545bd5c9ac130",
"assets/AssetManifest.json": "a234f6c1c6b24e8ea9a5ae9f6ade06b2",
"assets/assets/animations/splash_loading.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"assets/assets/data.json": "76d5e14510d4e6bb668fce26a40fa7f4",
"assets/assets/icons/consulting.svg": "5728e4e4dc454995d58f381591cd3762",
"assets/assets/icons/fullstack.svg": "6e6c8e12c757aec224c63cafa5073452",
"assets/assets/icons/github.svg": "869dae0ec433183aecc0f813300f2be6",
"assets/assets/icons/ic_linkedin.svg": "47340279be0a97f7155b71683fa17438",
"assets/assets/icons/linkedin.svg": "b2b3c6d3f63ca0392d0a530c6063751c",
"assets/assets/icons/mobile.svg": "24f688731c32386969db24e6348590ba",
"assets/assets/icons/robot.svg": "e0c749ebdf88c0b72eb17b064ff0a663",
"assets/assets/images/about-image.png": "71e958bac3be2c806a2e2551b0a91471",
"assets/assets/images/AWS.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/assets/images/boosight.jpg": "21d1e16855554e147161acad9b2eb06c",
"assets/assets/images/crm.png": "f0b9d41a56eb5d4b56ddcb8789350dd6",
"assets/assets/images/docker.png": "d58757d927ee8e8456a3ece2686b6361",
"assets/assets/images/finflow.jpg": "d1529febd2a6de09beac2760af6b8f39",
"assets/assets/images/flutter.png": "22894680b8d109bfcc60c67eb2c21d6c",
"assets/assets/images/intellectika_logo.jpg": "822314f4bf4193f8dc2e959252eef975",
"assets/assets/images/Isaac.png": "f2da2f4755c762d9fd9e74a0045c8612",
"assets/assets/images/k8s.png": "c5a5571875cf726bbace7aeb026a7af6",
"assets/assets/images/morinet.png": "e5ed433430af3ae962275ba75fca94c3",
"assets/assets/images/mysql.png": "75d83414f6aea3342792dd35f5bc2399",
"assets/assets/images/opencv.png": "591dbc0fb4f609461beaae0951c0362b",
"assets/assets/images/postgresql.png": "6851553db0e0adb3b33d25c011194bbd",
"assets/assets/images/profile-image.png": "c4783d769306967a14c315d156fff884",
"assets/assets/images/profile-image12.png": "4a11e6459f82aee78a89ffbd454cb027",
"assets/assets/images/profile_phot.jpg": "72f9904eebb9b999589ce2f76ad5ebeb",
"assets/assets/images/puzl_logo.jpg": "13647c73b0c75b8c243716b35b4d1490",
"assets/assets/images/puzl_logo_main.png": "0474cded592af96e9d7eaa5635f89a1f",
"assets/assets/images/python.png": "2aae2ae0b55ad76dafe20d06bc788e90",
"assets/assets/images/robot.jpg": "5f05a497c3623379aedcb3f4ea2fbd82",
"assets/assets/images/rosLarge.png": "06755bad72e48ed2cbbe4e3df30e5c15",
"assets/assets/images/rpe_controls_logo.jpg": "7a1479dda85fd7d0ecb12167df5a5ea3",
"assets/assets/images/teaching.png": "2eb75797572d25a1b499deb9b1b7b8a2",
"assets/assets/images/Telegrambot.png": "6d0e5c471726ed1235f7b8fb6140454d",
"assets/assets/lottie/lo_hello.json": "e7548c42b090cbac8d8e4542a2274536",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "87b9264edab4aba487b9106b290c2fe7",
"assets/icons/consulting.svg": "5728e4e4dc454995d58f381591cd3762",
"assets/icons/fullstack.svg": "6e6c8e12c757aec224c63cafa5073452",
"assets/icons/github.svg": "869dae0ec433183aecc0f813300f2be6",
"assets/icons/ic_linkedin.svg": "47340279be0a97f7155b71683fa17438",
"assets/icons/linkedin.svg": "b2b3c6d3f63ca0392d0a530c6063751c",
"assets/icons/mobile.svg": "24f688731c32386969db24e6348590ba",
"assets/icons/robot.svg": "e0c749ebdf88c0b72eb17b064ff0a663",
"assets/images/about-image.png": "71e958bac3be2c806a2e2551b0a91471",
"assets/images/AWS.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/images/boosight.jpg": "21d1e16855554e147161acad9b2eb06c",
"assets/images/crm.png": "5c2fe607e0647289128ad4fcd3d3380a",
"assets/images/docker.png": "d58757d927ee8e8456a3ece2686b6361",
"assets/images/finflow.jpg": "d1529febd2a6de09beac2760af6b8f39",
"assets/images/flutter.png": "22894680b8d109bfcc60c67eb2c21d6c",
"assets/images/intellectika_logo.jpg": "822314f4bf4193f8dc2e959252eef975",
"assets/images/Isaac.png": "f2da2f4755c762d9fd9e74a0045c8612",
"assets/images/k8s.png": "c5a5571875cf726bbace7aeb026a7af6",
"assets/images/morinet.png": "e5ed433430af3ae962275ba75fca94c3",
"assets/images/mysql.png": "75d83414f6aea3342792dd35f5bc2399",
"assets/images/opencv.png": "591dbc0fb4f609461beaae0951c0362b",
"assets/images/postgresql.png": "6851553db0e0adb3b33d25c011194bbd",
"assets/images/profile-image.png": "c4783d769306967a14c315d156fff884",
"assets/images/profile-image12.png": "4a11e6459f82aee78a89ffbd454cb027",
"assets/images/profile_phot.jpg": "72f9904eebb9b999589ce2f76ad5ebeb",
"assets/images/puzl_logo.jpg": "13647c73b0c75b8c243716b35b4d1490",
"assets/images/puzl_logo_main.png": "0474cded592af96e9d7eaa5635f89a1f",
"assets/images/python.png": "2aae2ae0b55ad76dafe20d06bc788e90",
"assets/images/robot.jpg": "5f05a497c3623379aedcb3f4ea2fbd82",
"assets/images/rosLarge.png": "06755bad72e48ed2cbbe4e3df30e5c15",
"assets/images/rpe_controls_logo.jpg": "7a1479dda85fd7d0ecb12167df5a5ea3",
"assets/images/teaching.png": "2eb75797572d25a1b499deb9b1b7b8a2",
"assets/images/Telegrambot.png": "6d0e5c471726ed1235f7b8fb6140454d",
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
"flutter_bootstrap.js": "a1ef78a90be87b61cd53c034d7e315c7",
"icons/android-chrome-192x192.png": "9692600621a087e777c68e223f8291fd",
"icons/apple-touch-icon.png": "626f97ec3a2de5b30d2daa9bfa951409",
"icons/favicon-16x16.png": "fe64697f309c2ab68da28442cc9508be",
"icons/favicon-32x32.png": "a4a6dc160f821c551f1b1d61d135dcbf",
"index.html": "293d9c099dc62fdae4dd0d6bee62e1de",
"/": "293d9c099dc62fdae4dd0d6bee62e1de",
"main.dart.js": "30a5ce2cea8d527050b649dd92778439",
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
