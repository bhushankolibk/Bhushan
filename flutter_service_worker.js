'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e6afb60170b6d43d720360f4b2db25bc",
"version.json": "f124181e58b12572810925130e6735b8",
"index.html": "f46c6c736b733de52be37185414d3e8d",
"/": "f46c6c736b733de52be37185414d3e8d",
"main.dart.js": "8d5d7b95f24aac5a5592e3f31caa7db1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "7af65b64548267ed2efa15a726a4b4e5",
"icons/Icon-192.png": "933da4ad0cf3375235a846f4026600f4",
"icons/Icon-maskable-192.png": "933da4ad0cf3375235a846f4026600f4",
"icons/Icon-maskable-512.png": "b40ebc3851f14585d953c6bdf55aaf9c",
"icons/Icon-512.png": "b40ebc3851f14585d953c6bdf55aaf9c",
"manifest.json": "d35a32220bcf004a0f3099e95dac54e1",
".git/config": "afd07a24c56f1175123d41bc118760b1",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/92/edab66fafa055fdba296ae0d8434450786db38": "093a61543cb14c3e5392833f4a07d1f9",
".git/objects/3e/19da823a0f491ab601f100826de472072d553a": "f98dced9f5524e299319007cb06b9a32",
".git/objects/50/25891f2fcc6f64de17c96a4a355492267312bf": "0ab45c8894243bc5f190040d66f0dcfa",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9e/43eec4918088315758548ea900e69e6c9e8b98": "8fea73b82e833be2bba36245fb60eac8",
".git/objects/04/7cd4c4ea26b64dd143de6855ec6bf21ab92916": "a5fc731d7be05a20ecfbec0aecaf7ce0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/a39a505f36715c4980de6fa0b2f5f3963ccfc5": "037532c22855bb7b0ac3e934bf936c7a",
".git/objects/33/c5725559ca205255e12bd0cdb514929044c47d": "f7026d40e991ee5a4984e9bac962ec69",
".git/objects/ac/4acc8e4f5aeaf0d3492ce46dc400da97b5a3cb": "69f50100d14904a77e939fe2772e922d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/b4/75261151854a5146fca97fe73ae4a98111c9ad": "2139b013255002ecca0a613bee743b32",
".git/objects/a2/758abf7ae8d4dad5b1a1e73056adfe78364fb6": "2ad177265c0707aad1ea3573dcea1897",
".git/objects/d6/dddf9b784c78b3e4aab8e34615064d67ddeca8": "1dc1c7c2c663125074301a46594a6a2d",
".git/objects/e5/c42a93dc6cc26e522d3296ba7945af83eda96e": "f93a2fc4348ee0163793b945ff7328fa",
".git/objects/e5/4f0aee7e6a73ed568c173619cc0686e9185082": "91e5878b892016e6bf35b52f1677678d",
".git/objects/e5/37187db5cf7c799b4e8111c5aaa250441354ba": "e6eb69736c13b8f7f940a2333b9d6a1b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9b1874222b90011fc18cceb093462226b74b90": "b162bef95e4ae67a1201070fbbc211a5",
".git/objects/fb/840ca46ebe43d8d4bf7461bd8abd66eb042811": "5197ee908748007d2f9770d090514241",
".git/objects/c1/772d03f54b9b5079666e712921b7578058a485": "d5971b4ebc868a1cf09de32f418d52a9",
".git/objects/29/a7a1195f00e619bc418e2a572e45b499fef9ea": "790694585ebbe9037632dfba5424ae9f",
".git/objects/29/5a1d2a7c39f012a9ef0b7359bdd53f1b01bf60": "dd0697206c7fcda0e47eccfac663e5ac",
".git/objects/29/e9d876e6344f7cc306404733a24c8b33e8aef5": "0b294bccd26dab0c66e0e9d2259676c2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/74/34f958ec77214eaa5bb425173f4d3bc9ccb025": "2fbd8578753ba7790c6a4790680b0478",
".git/objects/74/eef0c4571bea41f8eec1c95137d9f482a488d4": "c8db8d54a6ead9fc0b30cd1b07f70028",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/94fc17b4d3eefd8c29d377e396435ab2d8ea94": "4e77a1f3d07302a52f778a682a5e02a0",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/e9a07f4aff612e0666e2dd803ad00a1bd8bd31": "f4a07dc6dccac4512b8fdf81bb79984f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/9dc55a9f507dd99314fb342342665c86730e36": "31126711f86f22519f6139c343b81745",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/d96cec0593b9f07a82669a15bf0742fce150d2": "8903579002c16ca2ff4822791a7a607b",
".git/objects/a7/ab852fa63a3f73a1d11b9f72328a01f5544c28": "2bf9d9e805de53c173f795b909a5a609",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a6/51e9f9b3d1b4459f1b5535a34ee4c74975e73f": "98edf37b206c305402cf8d2e20b9e52e",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/46/6066181854313a3fb5d9aa03d804dde5af9da6": "4e3b6b67dd39fcac3d476e87acb8decb",
".git/objects/1b/5d42c7c8773fe0a0e9a4d3c620137fd0551d7c": "18bd9ad2646f946e958677019d1e5c91",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/3b1e294d48c93e2412a683838005d2615b033a": "d1f5c28535941ab682e244052db68215",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/89e2a203ab84819c1d3665b4cde84101e404ea": "51d2ade60f3e5abe6169797d80c0b5cc",
".git/objects/8c/8f27e4771effd1a14754e437cf8576591617b7": "83a5fd6d83371ddcd7d37d2e329f4530",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/e78ad715e380250879518900220e9dca61e27a": "39c5597c8aac7ab9fd2694a5b72a3ad4",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4090bd9cf2eb80db7166fae861627257",
".git/logs/refs/heads/dev": "edbfcbb77584bca23331d188e0da3237",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/dev": "89535513363d34bf490306a440fd08e2",
".git/index": "ec6430ec16686022c93b3ff1605013db",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"circle_favicon.png": "933da4ad0cf3375235a846f4026600f4",
"assets/AssetManifest.json": "3fc2c293729d7c4eba50efdfdc602f96",
"assets/NOTICES": "f1370ab8b9933398d982eaded61a80a2",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/AssetManifest.bin.json": "5b2190058dbf25c10caf16af4d1b9199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2a7be9d8d700c3f78b201a45ad627f83",
"assets/fonts/MaterialIcons-Regular.otf": "cfbce67f9ab9050ee7c603e55e3c3df0",
"assets/assets/imgs/download.jpg": "54afc38ab053e92cd3c7ce923c56fe87",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/x.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/imgs/numerology.jpg": "dad353a8b7003e312fee8d90d4a61ee0",
"assets/assets/imgs/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/imgs/android.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/imgs/my1.jpg": "d9ff24b28941dd35418ef5ba52712c84",
"assets/assets/imgs/portfolio_photo.png": "c42bd808e4cb6f879882f5370b0ed2ea",
"assets/assets/imgs/apple.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/imgs/linkedin.png": "1605cd36a25c98249cf421b145690992",
"assets/assets/imgs/bhushan.jpg": "9c04d5b6ca11c31ce808104acc2faab4",
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
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
