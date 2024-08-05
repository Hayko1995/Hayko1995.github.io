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
".git/index": "e6ecd539d46c352ec5e758e02a58b140",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4268a9b162bcf35bd99673e1c09c99f",
".git/logs/refs/heads/main": "e4268a9b162bcf35bd99673e1c09c99f",
".git/logs/refs/remotes/origin/HEAD": "00971a2d4244f5f84a7b1479ee2383af",
".git/logs/refs/remotes/origin/main": "ee721775a031c7ad2766f8ef1423463a",
".git/objects/03/e1c87c8cea8a28c67592581cfe28a89b5d56ca": "42c4c0b9c3b1f748095bbdd0053b30ed",
".git/objects/05/d2c15cea44821f9be8577e544a6fc9762baf24": "d2cbcb6823875b461fc0b3d1e02db240",
".git/objects/07/58f3ae813ea2c917d2454cf93ac478a276ab74": "566a87ce892fc470be59d91062a2fdcf",
".git/objects/1a/8a4523f57d06557b67c9d8fdc4e2b1b348e46a": "21a68972d405bf8963d56b776d48719a",
".git/objects/1d/9543a261078a8d2bb43d013eb369af47afc799": "d8c1bc736d1a1359511b673544ac4de8",
".git/objects/24/61c54a4f92b228d742fc09b78de942e3774845": "d664118c2b9cb82ec6bf90a96a99507f",
".git/objects/2a/27eba368588e6a61901cc495f1de472073d9d6": "3d2a9723cba453b7c688030185fb2960",
".git/objects/36/cfb5a68ce901ec7ebf27ec461ede193abb53f8": "6501cebb0d9209c67f519577043856e0",
".git/objects/38/4c168639cff5a157e6c6de117af12d52fb484e": "9f821ccf2d4b1e3a1f43d2f0a11dcdbe",
".git/objects/3d/d5ac511fcfc36e961ac773e63365f7acca857c": "effb57704856deeb8ad24574dd6a73c5",
".git/objects/54/7b1be8b2271917cc115672e5bbba3da3a67134": "01a7c1155c6c51fd32de4c46ee0b8aad",
".git/objects/58/a084c7d5ec00b7cf659277d29f58c07c9e974f": "d8d7dd32570e14c47139f6d00136cd8b",
".git/objects/59/bcf6b1f85a6fdfe26c5fc26470fe81a9107eba": "ea13fe689c80c1b5b0a859c0014f409a",
".git/objects/59/f3dcf82303cd5eea0eeec891e511b50f8b02f0": "ce536f1c7291c38d59c04325878f2ca4",
".git/objects/5a/2ea5ff36c8392d151a6bcd297ca56ca59b974b": "04e9439e717ea996989465e8d60dcccf",
".git/objects/60/823b749dd74bacd6504c144e487ab59e5be824": "6f6365086175573eb458138c836916bb",
".git/objects/61/5fd2add48785d58270d2d0b60061b13f0b9bf4": "4a4df090771d9f0a8cd5d0cf1dbdb8f4",
".git/objects/6b/30a72061a3f6d5699555a97aee67d583420a50": "326e3d8f0fee7c897ab7dfda53b56221",
".git/objects/6b/b1d565d9076e64ff2b666e11aa82b3d87e07a1": "86d03f73b420c117ebe66fcf21f9f46c",
".git/objects/73/b000bbc25fc881340db8af260c4f8e56e5275a": "9d2c6b6297285fe2483d3d27335a151e",
".git/objects/74/cb24b5d88875b2209fea0394bce2ae0df024f1": "f89bf161654251e24e0faff6720f96be",
".git/objects/7b/a63f88befc0e80ff165b26a2cfa34585ec3d16": "62781548bda6635ce3e93996cd4b97d4",
".git/objects/7f/525a19fe7af245280537f37cd50fb65653bd4a": "c9d067ab88769356bf5aa4ba0ba75eba",
".git/objects/80/ac2844319077721ee5349f81d5fc8b158df7be": "ee27d731bcfaae95008e396921576bcf",
".git/objects/81/bf2d97cfdbc47aadcbe429e537c662dd03b9a1": "bdab3848a1055cbdb0cc257da9cf09eb",
".git/objects/8b/b0d55ad6c39ac151984134337bdb6fc7fae730": "68338323bfabe695f2707f6120223b3d",
".git/objects/8c/4639ecac14275a3687b2c283b34de862b3c296": "94d306fc7b402fc763a7a71b260c18a3",
".git/objects/8c/7086d377bd2de84051d88d53f8075c9ea74afa": "8252a3e033e80eaf534575410e35c207",
".git/objects/91/4455ee7869000ee82723d0e4cac868b211cf06": "8bdd37b3010a074449b515a5c7d71334",
".git/objects/9e/13b6da9803563ed83d43af14ae4614207edb5b": "866dd72be1171033239e5ed9c0c21692",
".git/objects/a0/9fd0f68ba4ae82df5fd2acc0ec1be0ef7c60ec": "72fa450059fc98ac5b28deb0974f62d7",
".git/objects/a2/fc46c92835ca836d0cbb07e3491c62f6a8cfd0": "d8cadf722cc8f56da6add125e67d1333",
".git/objects/a5/ad00140cfcf6a89eedf50e6ac611c9b75d0a73": "9002b2f9e26d402888eda4f41dcd8087",
".git/objects/ae/3c0e0d180c30b144818ddef5c00cfd5ceda540": "2b6ae1cfcef1e7d2172cb4d9ebe51858",
".git/objects/b1/bafea7e8bccaa11a7985f1f52080b62d075b8e": "3f1e1407f95778bb4242f00d98912c97",
".git/objects/b2/5a64b53c2d8b91c5364079052aeeed00327d47": "9b603addcb2463c6e6f3f031d830dda5",
".git/objects/b7/689d925d6b61eafa6696937d13178c7e8ba349": "fe86c195cbe1f5d0400660638df8b442",
".git/objects/ba/75bae74b0668a4654753e258a971a264e9a185": "32501abfdf2e00ffaaebaf7e5d0d8835",
".git/objects/bc/82877a88843e259cc74a50e631cbc6928fa4cf": "23600676ea6c06a4ebfc7a067f5a3f04",
".git/objects/c1/8e4582e38c16d82a9644a48639b56f4c0d73c7": "0f9cd73d1ff48d3ee2ed60bff2ace9cf",
".git/objects/c2/fba4cdbbf71c021a5a7994c404a13f30f6d7e4": "dc40cc1f6385655a761d3067ed1f2b14",
".git/objects/d2/f03924021083fcccb94002257f13c37d3b3a9d": "b5e3aa2d8726840988116228a9e598c2",
".git/objects/df/65b1f9da52e48c152b19934281acac8d7436b2": "92265b053d882a546bc3330182fcc2be",
".git/objects/e4/4d077104fdbf16714aac6b014056a6a9dc717c": "5a42839262c0c156e6e8acd74fb5dba4",
".git/objects/e6/c83407e52dcba0a588bbc3a5e780fa7ed2b509": "d0bc3f5d321b706ec893162e31190993",
".git/objects/e6/ffa74a80aa331c4249c98ab08f3dc19a86e2f9": "89a3b35c18a631f5ebced5362106a816",
".git/objects/f1/559b031f01603cded9589c9650f29a779d0b30": "b9677df1f3a94f342c41dca31840cec7",
".git/objects/pack/pack-a71325dc85bbbfbf5c16e53c42125886ac3ffb44.idx": "eff3e0ac8df77d80f9bf6077fa221b57",
".git/objects/pack/pack-a71325dc85bbbfbf5c16e53c42125886ac3ffb44.pack": "43c77654725bfedfccbc31d53b4a4dcf",
".git/objects/pack/pack-a71325dc85bbbfbf5c16e53c42125886ac3ffb44.rev": "3d05c3774fba471d11ee19616d3ed8a9",
".git/packed-refs": "c96ea46f67a951594039069af25d8722",
".git/refs/heads/main": "4dd549e05224b03e769c075f104b1213",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4dd549e05224b03e769c075f104b1213",
"assets/AssetManifest.bin": "c397bd4e62a6b0249d868d2ce8d8dcef",
"assets/AssetManifest.bin.json": "d481a4891ec591f7bd9545bd5c9ac130",
"assets/AssetManifest.json": "a234f6c1c6b24e8ea9a5ae9f6ade06b2",
"assets/assets/animations/splash_loading.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"assets/assets/data.json": "5fe1e6ab1e162d96e2c7a8d6f35dd2fe",
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
"assets/assets/images/crm.png": "5c2fe607e0647289128ad4fcd3d3380a",
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
"flutter_bootstrap.js": "6bec3e25ca1a3ad06c869a95cc5bdb19",
"icons/android-chrome-192x192.png": "9692600621a087e777c68e223f8291fd",
"icons/apple-touch-icon.png": "626f97ec3a2de5b30d2daa9bfa951409",
"icons/favicon-16x16.png": "fe64697f309c2ab68da28442cc9508be",
"icons/favicon-32x32.png": "a4a6dc160f821c551f1b1d61d135dcbf",
"index.html": "f766f0c4d221a86879fe8952eb8a102c",
"/": "f766f0c4d221a86879fe8952eb8a102c",
"main.dart.js": "2e6787648185339f7bb6406667a3a625",
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
