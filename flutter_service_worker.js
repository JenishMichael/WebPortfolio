'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "77e2bbc762f6efd93dcf2e6c7355e09e",
".git/config": "60b70cc707220fd4f8edcdbc8f9d3699",
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
".git/index": "15259665a37ccfc1244b4345ba607a68",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8491744eb776f340c18bbbc6b66f4c9",
".git/logs/refs/heads/main": "e8491744eb776f340c18bbbc6b66f4c9",
".git/logs/refs/remotes/origin/main": "7fcd0c00165146283cbb8d592d73b95f",
".git/objects/02/abedb51e8c6cbf6b8c307b2892d164ce417b0f": "a96dab1c6299692e858da5fad70afad6",
".git/objects/04/ffdc62a6daf3ff8960b6889ee12435335375fd": "e2755ee646b2d4cb651fc7f9ab5e99c7",
".git/objects/08/9389e1036667071b84bb31288ec4956882dcd3": "f73e2d4c42b290d54203682eb77578a4",
".git/objects/0a/1ff73123ce1fdc11c8bb39a30d893e86aa23d6": "68fca7f5c384d1e4245f8bb00c9349a3",
".git/objects/0f/8eeb6bb271b454b87420cbf9a0a78bb9ba662e": "ba91971043db27ed7e5c0d364fad7244",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/0b15f1b79bec8ec02618795c504fc84802f24d": "b044383036efadd5d0e0ecfff64a7d1b",
".git/objects/22/058d4333d3a0852ca13ecce7dacb905912b6f5": "018be95e65657e5a4919fe50185e3030",
".git/objects/24/3e4566ef02065a4db36209e3e1ed2cae164db7": "4550af1c5831cacca54b2083369a9d37",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/00bb6bc2ca38ab0d365ac9625916071eed441b": "bc67b4f62aef6f31b727f0cc8ca30a7a",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/40/7382e456943cb3dac3a0eb6834fd168fd15f23": "fd4fc9e3ad63d04e49d183b26a205958",
".git/objects/41/969ab0f07e5abd1d4947872645880c19df10f8": "8205e7c8e7ea52f7a0d954f39172824a",
".git/objects/47/8daf67e15a48e4289ad9c271cc782b89e3c8f8": "28015a38e1058649831bc45f52c9c1da",
".git/objects/49/6a52fb21a825f0798d981db0f657cbadc4c5e1": "4f0e270ae6ee976a77e3ea36991f4413",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/7615267c8d33e153193f009fea5c99d2418d48": "221f4d8b6beff7c8a0bc15d3f157742e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/65/adde8bd90b653e48f1a5954b76401ebb847e1a": "29d09196bbff5251b7a564a64b1314cb",
".git/objects/66/1a37837d7c0d00fb4e5cf0cc6df5a0c4ce89e4": "a2a4281da90631186dd53f8ad4b9e575",
".git/objects/68/cd1325211459bb18dcd1ce46843aec70715df6": "c983a7106b4af1dbf282866002a08dd8",
".git/objects/6b/59835aab554dc2ad05cae5ad74d87ecba1d261": "d47fe5ba77f695ef2921899651ad514e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7b/c3cbe5828c0dd7206625ba285088ea456058c0": "79cf2e4bf9702b475b63c85436be6c49",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/9b9e37c685157cc17a3d6b158d7086d1506ede": "e31e645a6f7f56b4c88fe6fd508213b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f64a47fe82027615d42705c0d030219a20e57c": "2cf1f3e0b48d2835dd251474a4149fbc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/8569ffeb8ad8687a094842c0e6a53b1822e6e7": "831e2567e7e7d9037a9d21ba1ac1b22c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/4f8e99703238eee4d4c1067266e0fb164e0e20": "d41e69186bf3894269bb43ba52f710a7",
".git/objects/9f/14ebbca02930a211711309c679b0114e08adff": "d1c5c2cc3795bb92921b4dd3591eadba",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f9bb2957dad6f565808b2b043a131125254a7a": "4eeebef0b322796bfbe82671580f023e",
".git/objects/bb/d73ee8bc181a789b0ee4004fe2e7edba1225a0": "f9e93395a68af52c559ab6b96c4dc859",
".git/objects/bf/54af6c570cc5734b62a852966c4e2956c7ef09": "0fe6adfda40402ee33eec0262e091a66",
".git/objects/c9/0886a2280257b2ecbc47cf4b3f352b0eadd87e": "798bf456f985c61d4b9673479c06628c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/67d85d4ba4fca45672db307047ae2fca4a5170": "f90f07d6f277eec94defa8e39a6038e2",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/ea79f461eaffc228f1459cad95a626cb27374d": "3da6ccffb439a7d461e0fb4dd311d047",
".git/objects/d1/f2cbdcf4891eeab96aa6ab492ba71a85f66095": "485c5fccf4351963a2bc307b9cde1df1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2708c4df8e8cfa54f5524820f3c605b518dfdf": "03af0b0502142412eb25c751584336b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/15228c6d4bbc50c18d641a3f51e79d5da8dd2a": "31c59c7c0a497b077bc00ad1bed69582",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/ea/b3c0bc3beee7b5d7b561ed454fccda011610ad": "ab1c0334fc519a95b47c9f6e0709961f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c7ad97a3920c33b9a0d6ae9933763af11d89a4": "3cac1db58ee157b62f29c3b7d5e7b1bc",
".git/objects/eb/fcff3ed75992c5830a311aee22919cde12be9f": "ea3f448e70119223402d0642b7fd33a5",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ef/d56ebf2abfdd1f7eae49a043ab731c9a995182": "78b2378984d1d396e9d9a37782689049",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c2dc94ae1bcaf4e3be8bb0d3ce8ba95e25bbc3": "8a7a535d828493fd6dfd9418c1862c00",
".git/objects/f7/2111161790ab486c9e53463d53c574ac26b09d": "c73577a26f69621250b53bf5213aba96",
".git/objects/f8/786728d160d59b157933a3f8133ee9730e39af": "834c00c940d67d34e5eb25e142432647",
".git/refs/heads/main": "05c0692c4bff35f0ec18718db047f7c1",
".git/refs/remotes/origin/main": "05c0692c4bff35f0ec18718db047f7c1",
"assets/AssetManifest.bin": "47b833eea1a32cb4c96aeea691648219",
"assets/AssetManifest.bin.json": "464addd81f544ef4f5899e1c0ccbf167",
"assets/AssetManifest.json": "5e5ee516d82378cdbeb1fb8a70a43949",
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
"assets/assets/image/html48.png": "845c23bbbe7fcd936714afd4ca3aab6d",
"assets/assets/image/html60.png": "09fc47c968529c277784a9fcf22ea42b",
"assets/assets/image/intro_image.png": "ff9026759e916007ef9a0ecfb0af40ac",
"assets/assets/image/java48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/image/java60.png": "000272d26b5e51ba601579c4744330d0",
"assets/assets/image/LinkedIn.png": "5d1e152e44f5c49715ce75c6c089756c",
"assets/assets/image/mongodb48.png": "99830feda321b762a5dff7e6eaae7aa6",
"assets/assets/image/mongodb60.png": "b3070fb870f3d9479425a67f27e9da07",
"assets/assets/image/mysql48.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/assets/image/mysql60.png": "6805ce0d2ea409937a7c97f288c738b2",
"assets/assets/image/whatsapp_orange35.png": "155d53d9760755371f04160a69ff5884",
"assets/FontManifest.json": "00d7b1ce4aa31f8d8070529d700f2d17",
"assets/fonts/MaterialIcons-Regular.otf": "808c03d75c9564a3b6686cf232d804e8",
"assets/NOTICES": "50c053ee559ebbb4e40bbccbfa87fb61",
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
"flutter_bootstrap.js": "01d01209627ba3fb9f1623ef1bc507dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afb6c1d204c7606b7fb16fb6349a798c",
"/": "afb6c1d204c7606b7fb16fb6349a798c",
"main.dart.js": "a4c97ac515119b732f77d963718f0c37",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
