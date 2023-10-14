'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "04053c59e2d416da95bd2e3584f469b9",
".git/config": "8660181e6f02ea07322ed1818aa71afa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a49d5c1777bf87c5164c84bbeabfc217",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd7105204419263874a574b5fccba4cc",
".git/logs/refs/heads/master": "b16b855e1e8ae43101e118f239c273b2",
".git/logs/refs/remotes/origin/main": "41ee21c08fb7e4b0e26fe553b040e81b",
".git/logs/refs/remotes/origins/learning": "8cdcce63858259b6c3da43f86cd9471b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/255776a5161b41b89d47cf27654cfac43480aa": "446aaa98464b27087a0c4a2ad19b0f06",
".git/objects/0a/1928e94bac0ea6c6d99f6af34e7dfa77a8ee8a": "6abb623aa3e0b7a9d6d290aed32d58f3",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/8733d80da1ef05a951f4371a98f7bd4694f86e": "3af8bb9ac7a1e2b5557e1402ab5486a6",
".git/objects/0f/c743820569c132aaddcab6d19dde940b783ba8": "4274c0f2a31fb9db0367ad50d2f9e144",
".git/objects/16/ee75808a26901e866fe1bdffbbda7f107002c6": "f837f380a6cd71e4beecf724c4353a58",
".git/objects/17/8dd91d120754f8a3ad6ed5a451ecd112db8179": "cbb61227fcfa2b5933d1c7cbc7ba56a4",
".git/objects/17/f9c7497b9a8bc0e4ef7393cd9717b60cb2dc19": "15c6a113cf2f0bc1e648c985014c5815",
".git/objects/1b/800ce699edfa8dba94834a6bdc320d161b77c5": "e54e2e7ad37bad5b386ad6a8e41f70f2",
".git/objects/1b/d8b2c454618a1606cfaa537a92533789d8f57d": "0666b743f1595216c3a6fa7cecea73d3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/93b67600bb39534992ca752fee24964ddf5056": "4aba47efe288d4ad71cdc80c10613791",
".git/objects/25/7727c0f18db992fee45ec97d6ba68f167c281e": "ce0118978cab697ea8b920353c1bd500",
".git/objects/27/ca5a806f0d9238af7d5b3ec404887c201f1afd": "e7c8537210251ad4869788e4f5d287ed",
".git/objects/2b/5b7537db835e87f89b548cfea304d5ccb5a529": "660a1fd8b95215ecd2732663fce43255",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/95cf84751d2d71b60687ee18a04f8018640007": "146fec044853ec89d08d1ea3fb91e1c0",
".git/objects/3a/4fcbe02e30fd264eee793510fd469b78598564": "4c51c82a180b0f332043dbc94179f9a8",
".git/objects/3a/8dc0c422e5fe2d7d7e4e8f8d30f6866240ed2e": "8a682ba9c60b1c6c10db60de147f7cdd",
".git/objects/3e/c9c3ce8f49c5d3756a53bb1bd96e5ef68fc192": "195eff45099204d71e49017066e43f01",
".git/objects/3f/d4f49e6bfc1a5891c8929c45bce91f9b287362": "8fba84756b6864d0b46a2d0390f9dad9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/4d5721b8ede2e86318775dace26f430b571562": "aafbef5106ad28fec902853ac2c12b48",
".git/objects/4b/bb1e3a3d63e46f83bbb7202b84b517a48bc93f": "0ea13ebfc39ce2a3d034bc857827aa56",
".git/objects/50/db41cebb59bfa1a302e44e464cf642ce2f1914": "fca0ba0a24bb6a56d16b78c9c4829d24",
".git/objects/50/e19ed6d5b5e6ea60a300a225604f82650f89c9": "de4d61726a57e686a098ba5005c84620",
".git/objects/50/e8bfc2b3feab18cece4f038f890a9889855022": "8b165e3900354486cd81b477c506e7e4",
".git/objects/50/efc8a9a6710fc4bb6876f4b073dd181d760afc": "7afb42cb584aa3f267aba8b2530fb160",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/ff660fe13372eb4eea52dd1b1902425022ab35": "dee3c045d63779f6d5b058fa339f7c98",
".git/objects/53/0955eee1cb54b0c6cf3d173058ab1a5aac58b2": "e7e558fe99fd804c122f62ed7535a3aa",
".git/objects/5c/6933237e407068aee2a9dfe181fad98fe7298e": "6f96bd2d1c1236f162e2d52122a8542e",
".git/objects/5c/9e767933ac22d38b9c1fd5b6abe847146cd2e5": "7e4a3ad59c5317671b8dd4fa6a193e4f",
".git/objects/5d/0e79f2db55d07b3bffb7eded3483c18a8c5b3a": "20ec75b9df03b9b63c6f06cffbfd9e5e",
".git/objects/5d/c3cf9043003a737a0174e9b1920e3f41c2ab7e": "f03d21acbf05d439f92c72f3c11a3a37",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/c7c078a6ea7aa49d0570683d004ec14a791381": "c57a2bb203489479d238e9c7b1c1c313",
".git/objects/6c/2795a0c3f876e9369f9d1986520d5e1955ab0b": "9f3d5a0561a2af772034cc027a448fc8",
".git/objects/6d/4c4470464d90acc05b5ab4abe8844995f91c00": "bd6ce532a1736826eaeb97804f4eed73",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/db0773bba843c129e702deeb94b8d13760def5": "6752ae2f152f61b943f57bc00d357009",
".git/objects/79/a7ba463c714541a4110e3f388ab75646261f00": "f1575ded2f1ff36c8cb2812089afc5ac",
".git/objects/7d/94b19f02cdb19d03da2b3e72e7659d86061b34": "75cf9f20d59f660a008dca323da9d8a1",
".git/objects/7f/11c7dd83de830b4f169a16735ade04775500f5": "0850d246d644cde695f51b9bb5d0f768",
".git/objects/7f/5f3746d38b50786ebed74f9584dd440eceecf8": "6f599da814fec7601bd1b3fb4197a3dd",
".git/objects/7f/7b670af90d7a8892364dcb505ac5623d226387": "be23bb3154f2aceb383a567c2b56df57",
".git/objects/82/251084bbfade92ed20a6f119f8bbe694f04a31": "06bf54f5de775009bafed0dbd9cd7124",
".git/objects/88/8ed332e3681dfeea2f525497691a4cf3dbe20a": "b0800b28f742205e75c99919b637713d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0ed16f3fdfcef42d676a38bab60ef07b0fd85e": "a850740ace35be873394fdae20b254a9",
".git/objects/89/cb8220c69af34c28d5d9ce2a8efd9e5e02a821": "17eb39bd938eec784d47f0535c791196",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4fe26af1c4866749334f962b45c620c5e3503c": "7347b0352cc98de17cd25f6947a19589",
".git/objects/8d/2b4a8f0656fa6e8a8b4419808f282a0e60aad9": "c57867e2f7c6df3274954e5ecdaaffb9",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/95045148f87bcb88d549804589e4a825b03819": "a6c1b731cb099efc2a0b950c12c35baa",
".git/objects/98/8bd86fe4929bd7ad35dce230d422e1f4e7596a": "6d72b793b06598a56b8674d423f1a14a",
".git/objects/99/1698880ca5b5197d652c84d689364782c21175": "0ad6ab38e0ba8ad0e5ae84f2a52ba68d",
".git/objects/9b/137c722e63f5541be2fda611651314df6a5bda": "6dd5b3e9906e579bb9b2ca72e0df6f9a",
".git/objects/a5/7a7cdef5e1bbc8af90d01ae6eb4ae381bf2cb7": "010fa5ba37302a74e11e75421e237c62",
".git/objects/a7/62372e618bf5c0ed013f66558ded8a112db060": "1f7832600af5cee0e379ca7581481a8b",
".git/objects/aa/e17eab24613464bbbdb7efcb343c0789e90b71": "344e53a1f4afcd5c0cb64bf4c418b6d4",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/8e4722cd019c844769c9eaf604f64ae12bfc8e": "79a3d05c77514cbb9c0d97b62df57e94",
".git/objects/b6/dbd025775c7a32e26a656cc8c3e775c00e6096": "34584e95bd9e8f33b53a9adec6bfcba5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0f679dfb2abc5cff9b88d5033af934d7286d74": "1254047b432841747104863f3d30d7f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/d4181f1665d818aa81fd05c39448354a1e3ae4": "f53bb49259ef0788830e003f6811ad6d",
".git/objects/c1/94863df24fea9d05e6e1b1edf20ba6ddc143ed": "3b161e09029a33b650356a4d2ece54f1",
".git/objects/c5/4fa7e197c3bb343718d7f8a9dcaddedd289a1b": "e411adf747e5eb1e34a66c12e5a19b47",
".git/objects/c5/f9457efde9d217b2da9ae114033beb2ae4b3d0": "e24c14b5cac81101832be639b0e93f8a",
".git/objects/ca/44cc753d12cb770cee22bacc84a4f5d5c3ff8d": "60a458633d4d135c6c2f8565711ec309",
".git/objects/cc/fa1a15a46b69508b310e7e15d968a0484390d1": "4d5faabc3e519a542f64022230a20ff4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/1c871395acf84eb170b187df9e28cf5bfc410f": "7ffcebd36c2f5344a0a260b74bbf76bd",
".git/objects/d6/1ffcf37a43ee08bfa2d5ef41b2181aeff43420": "66991dc296bd05ce140a74b966a78dbc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6eda25caad52d1e7cb6edfda22d095f071c8c9": "b2bba28240a476d895e99d1187fac5cb",
".git/objects/db/29811d5c2023b05a1e8a18da599c0caf9f0a4d": "d2afda59e2925d78be0d7f6f98a1ab38",
".git/objects/dd/214a4e7c2c22f7c475a1f137d46f814931a9ac": "f152a8c30a9568d624d94856bb087937",
".git/objects/e0/9953ebf2f5d9362a079b173427f7bbc498d26a": "141e45f83b03725bef66ee644fe2bde1",
".git/objects/e5/9772a0ac0217cc6b041cd4926ce6378f5aeac4": "a40d7bb698a89f5300610810ba52d260",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/73cc7153620d050db68de045116213aba94a6a": "611586e906b6c67c68244237b9ff7f5a",
".git/objects/ea/f74c2e8874cbce25b90fad87f1bb956a4b7cb5": "2b19460c916ab4ce32390c3cf2b4e7da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/09c2a891ff81f1a911b7dff217fc6d16bbd30f": "2c779cba6a56068b053b9399f37ea0ab",
".git/objects/ef/122aedf827bc8941faa7c70212312eae3708ed": "8917cad759080a936e2d4774414b3ec2",
".git/objects/ef/5bafdf40be10f6aa4ea35675fa617cd21c2acd": "127b201f4fba52f0718396dbff85da33",
".git/objects/f0/7185a177ddb910cfe7a1e6746f169520ff1f3d": "a38d602cfd6a4e1a4571bd8c6954e33a",
".git/objects/fb/3c642bca4897933666ca10069b70c8cc82e6f6": "af235865e657c0db9887cf889b6b7896",
".git/ORIG_HEAD": "dcfd9d4e8c8ed1cbc2e8c86ae077c22e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "fdcdbce7f1dfd3c0a0875ff9e5d71e53",
".git/refs/remotes/origin/main": "fdcdbce7f1dfd3c0a0875ff9e5d71e53",
".git/refs/remotes/origins/learning": "999fe25657931f339e2a64d07c4de450",
"assets/AssetManifest.bin": "78eb68abc14008d3697a0d6677833233",
"assets/AssetManifest.json": "7851d0b6264e4432225e8a7f63aa507e",
"assets/assets/images/appbar_container_emoji.png": "7caae1f1426b52135d8bf290972129d3",
"assets/assets/images/Logo.png": "dd79714cdf1ed1b2da0b424346de58f0",
"assets/assets/images/netflixLogo.png": "530038328a661c3fce4315bee88ee7ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "49484784847f8ed5863cee3866cd5a88",
"assets/NOTICES": "c9659818674a1f8bf30ee71e779e1ba2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a25bb441db050c6d62a67af118fc4a7",
"/": "8a25bb441db050c6d62a67af118fc4a7",
"main.dart.js": "50d91f4db8c0b37960101d9b8c441273",
"manifest.json": "ddb8f64a88debf7b87af9b0f0db72250",
"version.json": "0ac315c1bbb2083074de6995299abac7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
