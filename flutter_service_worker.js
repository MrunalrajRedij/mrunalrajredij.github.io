'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "b475aac19d6d1e17c5cf71b041f218b1",
"/": "b475aac19d6d1e17c5cf71b041f218b1",
"main.dart.js": "cb52d080e62baeee970c0b973f87f6ee",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/favicon-192.png": "b32bb6efc77197fae0baa89bfe8b331a",
"icons/favicon-512.png": "edc4734ccc742b865a97295779843175",
"manifest.json": "8ec9c93b7976f50bcfaf3a055b0239a0",
"assets/AssetManifest.json": "21c6ad148045ad0307b5248ab80d11f5",
"assets/NOTICES": "9c83b77a25e5a9537119a8e77b3f0825",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "01ee718fe94327865398b9b066b330a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "17b79aab46a6ce3707f910c8d1c2e66d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/profile-pic.png": "f4b4ec44a6c76d25f80dd9f36de889a9",
"assets/assets/logos/android-original-wordmark.svg": "5b2973cbf8d367dd41189dfaacffeadf",
"assets/assets/logos/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/logos/adobe_illustrator-icon.svg": "cf696c5bf3a1ae3912a410304e9cd526",
"assets/assets/logos/figma-icon.svg": "1c4f37801e58491b4778dcece69baadd",
"assets/assets/logos/react-original-wordmark.svg": "a9da17656be0676fc73a195ca71eb247",
"assets/assets/logos/javascript.svg": "2ec94a842a6022f904d8c240e0313031",
"assets/assets/logos/java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/logos/adobe-xd.svg": "68420bb491f8f366dde87cd96c91fa4c",
"assets/assets/logos/php-original.svg": "6a7a2ac3f9bd42f2f3c51f230f5bace8",
"assets/assets/logos/git-scm-icon.svg": "47daed5c8b18376be7ca5bd927bceb96",
"assets/assets/logos/github.png": "bf0fd603717578096ee77adab8fba21e",
"assets/assets/logos/instagram-logo.png": "c2e364a780c623dbeda4a0852a37213d",
"assets/assets/logos/nodejs-original-wordmark.svg": "4d315923fdb4ed913816974c5cdd8004",
"assets/assets/logos/linkedin-logo.png": "6208262a40f86ca17d39763bec466d40",
"assets/assets/logos/unity3d-icon.svg": "8ef0a4ee426474b51e376d727a4f27fe",
"assets/assets/logos/html5-original-wordmark.svg": "cba10c7c1ce484b82ab9b156b9abc74a",
"assets/assets/logos/css3-original-wordmark.svg": "3359119defc88a608e351bf75e18efc8",
"assets/assets/logos/mysql-original-wordmark.svg": "827a54314ab3e4c49257c8e76caf9a92",
"assets/assets/logos/postgresql-original-wordmark.svg": "ef9bea816362cb4cd3faa7ccba7503b7",
"assets/assets/logos/heart.png": "365b3088c9cd2fa6c507b1dd0d1ef147",
"assets/assets/logos/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/logos/leetcode.png": "660ab5855095986b38d47c2a502c02ff",
"assets/assets/logos/sqlite-icon.svg": "6f8be64c8c527fccafa5ed87d74e4615",
"assets/assets/logos/linux-original.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/assets/logos/getpostman-icon.svg": "f37754ebbdd47159e4d8d382466c474e",
"assets/assets/logos/discord.png": "d62ee012877d120135dc3600bfa91228",
"assets/assets/logos/python-original.svg": "2bc0534423307f9630d42b8c0e9412e2",
"assets/assets/logos/kotlinlang-icon.svg": "73c815b94511db676068d478c1e80875",
"assets/assets/logos/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/logos/photoshop-line.svg": "d87ce0cd06f1bc3d0b7373f280ee3b8b",
"assets/assets/logos/django.svg": "cffb06948cad3772f4ceb383e76cf8c4",
"assets/assets/logos/csharp.svg": "695ab103bacd8c23e7d326c675871e12",
"assets/assets/logos/twitter-logo.png": "9a27174f32deb85c4b8b9fb003069efc",
"assets/assets/logos/chartJS.svg": "6ff1cc867352565bc454a182b4928f6e",
"assets/assets/documents/resume.pdf": "a6651927dfa5657a785056bbbfa66ca7",
"assets/assets/documents/siteConst.json": "cdacc74da5c661dbd3cff1502458c96d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "3a3f8673782d19b3a5935ae795e1eada",
"canvaskit/canvaskit.js.symbols": "ea38a11e0cd06bd815b83dcb9f9aaa5c",
"canvaskit/skwasm.wasm": "45283f64148328e0aa69abe648db5f2a",
"canvaskit/chromium/canvaskit.js.symbols": "bf65c4152b4e4a2ca4915cbc3ff32678",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "12b9d9d6c9b96bd281170b910b21cf67",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "e57868eee1d9a50a9b2d0c9d91dd53c6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
