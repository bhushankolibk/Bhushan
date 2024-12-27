'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f28c2f7d908fe3c3b48172e7e4b6e17b",
"version.json": "f124181e58b12572810925130e6735b8",
"index.html": "f46c6c736b733de52be37185414d3e8d",
"/": "f46c6c736b733de52be37185414d3e8d",
"main.dart.js": "c93e55f270ef63dd0f667d65e6738652",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "7af65b64548267ed2efa15a726a4b4e5",
"icons/Icon-192.png": "933da4ad0cf3375235a846f4026600f4",
"icons/Icon-maskable-192.png": "933da4ad0cf3375235a846f4026600f4",
"icons/Icon-maskable-512.png": "b40ebc3851f14585d953c6bdf55aaf9c",
"icons/Icon-512.png": "b40ebc3851f14585d953c6bdf55aaf9c",
"manifest.json": "d35a32220bcf004a0f3099e95dac54e1",
"circle_favicon.png": "933da4ad0cf3375235a846f4026600f4",
"assets/AssetManifest.json": "543931347977cb21b90db050a1af9242",
"assets/NOTICES": "7d3530ebcb853a06ba0b59d37bcc6054",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/AssetManifest.bin.json": "24fb9b7580574ed76bd505e287fe2bdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55ffc554e445a4fa715d9cd28d2d31b2",
"assets/fonts/MaterialIcons-Regular.otf": "cfbce67f9ab9050ee7c603e55e3c3df0",
"assets/assets/imgs/download.jpg": "54afc38ab053e92cd3c7ce923c56fe87",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/x.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/imgs/numerology.jpg": "dad353a8b7003e312fee8d90d4a61ee0",
"assets/assets/imgs/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/imgs/android.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/imgs/my1.jpg": "d9ff24b28941dd35418ef5ba52712c84",
"assets/assets/imgs/portfolio_photo.png": "c42bd808e4cb6f879882f5370b0ed2ea",
"assets/assets/imgs/karagir.png": "d860a8df9ec3f78a2103342e6451bab9",
"assets/assets/imgs/apple.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/imgs/linkedin.png": "1605cd36a25c98249cf421b145690992",
"assets/assets/imgs/dgv.png": "2b90814f76e437895cf210a55c2e1363",
"assets/assets/imgs/bhushan.jpg": "9c04d5b6ca11c31ce808104acc2faab4",
"assets/assets/imgs/adda_game.jpeg": "95958d5925d290671eea45a50fd54a1e",
"assets/assets/imgs/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/android.svg": "0a06bbe3de0a2033f060fdf641cfca77",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/database.svg": "529916ccdfd4555b48d0ffeb5e07859b",
"assets/assets/icons/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/icons/testing.svg": "d706ef7a8e5122175ac28834fe0ddd67",
"assets/assets/icons/web_development.svg": "833d94a0475130dcb8fca894c59bb278",
"assets/assets/icons/version.svg": "e09fde88b2ff6f63b680256759dc2619",
"assets/assets/icons/apple.svg": "a575ff598faf75c193add0dc672788e1",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
