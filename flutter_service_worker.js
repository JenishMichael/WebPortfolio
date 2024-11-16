'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "80e521ae6361b0c5d418dd42274e91fc",
"assets/AssetManifest.bin.json": "522fa1b045beae8f6fcdd26616adb2e7",
"assets/AssetManifest.json": "98e442a21a1a4c5db9e0b447bb6d24d7",
"assets/assets/fonts/NewTegomin-Regular.ttf": "d2e68efd9b8f14cae609e23d079b7af2",
"assets/assets/image/call_orange35.png": "49436382d50d557cbacaa759f596b683",
"assets/assets/image/css48.png": "adbab6dd9277797b5d7d6b1b9ea49f19",
"assets/assets/image/css60.png": "5c2f8c0f64edcc4750315305608cfd8f",
"assets/assets/image/dart48.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/image/dart60.png": "a44646b6f2f28c6dab3c2a83f2a634bf",
"assets/assets/image/email_orange35.png": "acd6ac573c9b7a9e1cf9f6d52a434b52",
"assets/assets/image/favicon.png": "9eedd1c3bcabac2a54f6cdde594d1efe",
"assets/assets/image/flutter48.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/image/flutter60.png": "734167c56937574fb4cf60533047005f",
"assets/assets/image/GitHub.png": "122154f9bb6ce49302279356075151d2",
"assets/assets/image/GithubWhite30.png": "12d3dd99068b537e451b2c0b40250cf9",
"assets/assets/image/html48.png": "845c23bbbe7fcd936714afd4ca3aab6d",
"assets/assets/image/html60.png": "09fc47c968529c277784a9fcf22ea42b",
"assets/assets/image/intro_image.png": "ff9026759e916007ef9a0ecfb0af40ac",
"assets/assets/image/java48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/image/java60.png": "000272d26b5e51ba601579c4744330d0",
"assets/assets/image/LinkedIn.png": "5d1e152e44f5c49715ce75c6c089756c",
"assets/assets/image/LinkedInWhite30.png": "a25d65c874d0a4ad10f47cb25e7cc5e8",
"assets/assets/image/mongodb48.png": "99830feda321b762a5dff7e6eaae7aa6",
"assets/assets/image/mongodb60.png": "b3070fb870f3d9479425a67f27e9da07",
"assets/assets/image/mysql48.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/assets/image/mysql60.png": "6805ce0d2ea409937a7c97f288c738b2",
"assets/assets/image/whatsapp_orange35.png": "155d53d9760755371f04160a69ff5884",
"assets/FontManifest.json": "00d7b1ce4aa31f8d8070529d700f2d17",
"assets/fonts/MaterialIcons-Regular.otf": "2373b6649a769c46041cb5a1e94a84ba",
"assets/NOTICES": "06e451f9e497d9ab4c9f160f0c2db9b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d3b3ab08c74c2d23d6b608ea492508ff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd7f21c7a0fda340218fba5d4d21783d",
"/": "fd7f21c7a0fda340218fba5d4d21783d",
"main.dart.js": "c1d942d43b8d03df1e3a63ec0511de51",
"manifest.json": "6535c9248bfff0dd4efbe3a9fefa958e",
"version.json": "1956bdf80cdcfd9ff2322b8df95d246c"};
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
