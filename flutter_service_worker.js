'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
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
".git/index": "8079ad1f769eb9d3f7908c8125dfaf20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f65f3c39a279eddbc6a312ac7d49bf81",
".git/logs/refs/heads/main": "f65f3c39a279eddbc6a312ac7d49bf81",
".git/logs/refs/remotes/origin/main": "c83fe8ae4533fe0259fb4e54338dec3e",
".git/objects/00/49a39d2637995674527b674446c608f560ed29": "1edea5836fcf46b9131689d3ace783b9",
".git/objects/01/3aa4766fb389881ec123b6d6da20c381696344": "09318a0cac66cd0958639ba34d1e298d",
".git/objects/04/ffdc62a6daf3ff8960b6889ee12435335375fd": "e2755ee646b2d4cb651fc7f9ab5e99c7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/9389e1036667071b84bb31288ec4956882dcd3": "f73e2d4c42b290d54203682eb77578a4",
".git/objects/09/5a1a9f0506fa670f7102c98161d90ed9e24bff": "c310fb349bee0eb53b8e92d10aab2354",
".git/objects/0a/32579e29f18904ca699a33f537cbdf0775847d": "0a79263bb9b968430bf00fa0e2e04055",
".git/objects/0f/8eeb6bb271b454b87420cbf9a0a78bb9ba662e": "ba91971043db27ed7e5c0d364fad7244",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/f262befa60f2dc2b1286140f813d3ccfa59b6c": "60955bbb6d4b6c23f674bb2b19e20e17",
".git/objects/15/a1ce3fcc0521b6f4c8e15ed37c4ff46e1746d8": "c1302361d675899764230184570358bc",
".git/objects/16/1f2ce949923da9704e48b2c056b331ba472a83": "839fd8a87ee19e72a2dbc1b05e5ba757",
".git/objects/16/818d692762768b56ecc87a5d81749fc8d1d4db": "dbf928f525b0cf7cd9a68cb82647a998",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/0b15f1b79bec8ec02618795c504fc84802f24d": "b044383036efadd5d0e0ecfff64a7d1b",
".git/objects/22/058d4333d3a0852ca13ecce7dacb905912b6f5": "018be95e65657e5a4919fe50185e3030",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/3ea86851eb3ca70d7d0fdd814769005e8e7547": "785c5b86bdd22ae94733caa934567b13",
".git/objects/28/00bb6bc2ca38ab0d365ac9625916071eed441b": "bc67b4f62aef6f31b727f0cc8ca30a7a",
".git/objects/2c/2d0aa61ebcc9fc50d3b4212c612dfe30e79cb3": "44e9077508b6e808d49c8d48b5cff249",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/31/2e120883c157a3b68e2739a38679affa0fc93c": "8ec47aa1812b4af60ca9feaa45e97a83",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/cdf91d9d4f16210d1d5e36561dd0670cc2b94a": "d52d20f155198ebd3762f19b145a29f4",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/0623362731e03318eb1a64df9ec8fae6aee6f9": "1ef85ff272ac23ae0c82cce4c54fa411",
".git/objects/3f/8bba346ef7fffc338983658cfbbecc01e2c652": "353fa52975f69bd626185b857f86c2aa",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/7382e456943cb3dac3a0eb6834fd168fd15f23": "fd4fc9e3ad63d04e49d183b26a205958",
".git/objects/41/969ab0f07e5abd1d4947872645880c19df10f8": "8205e7c8e7ea52f7a0d954f39172824a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/23e265d163f5864adc0f300e4b812ee51beeb2": "d5053a9bb78975294939d4057662286f",
".git/objects/46/448e337c7d8fafcaf4c28009687bb43cf2f507": "08ab24200b39a7e18f259ff8215d2c24",
".git/objects/47/8daf67e15a48e4289ad9c271cc782b89e3c8f8": "28015a38e1058649831bc45f52c9c1da",
".git/objects/48/343a35b7c40220749794d71029b7a8c5421212": "ef92777b79cf9fe0fa6ac21a35ca7060",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/8ae9d2f36274976cc0b1028311c16435212c3c": "414e3caaaf88cf318d2c309cabc1e91d",
".git/objects/50/4273485781ce7671923de1f185e943029245e9": "8fb3bb71b660e9d6ef292cdeda485383",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/7615267c8d33e153193f009fea5c99d2418d48": "221f4d8b6beff7c8a0bc15d3f157742e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/f6fe9fbe7fdd44ae92b02c824705732038b668": "064caf6b354f84e443cd102e93190a7e",
".git/objects/5f/59f2c47ea45e434dc6108c44d317398da6b06a": "8a0264793b1670490a80140479224f0b",
".git/objects/61/2c9a23a801ed6adb621bc627f0d2ccd37d5df8": "e8d0ce5b3e4210ed0619cef340ee4f6f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/14464e1c469c3e0b8b69faa51f73cded7f3666": "8c0d294de3de6d2280415ca47d58aafb",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/65/6c99f1ece73ef6f93b5ba7a96711a76b7adee1": "be5dd4811760e4b404ad191d5bc29fb4",
".git/objects/65/adde8bd90b653e48f1a5954b76401ebb847e1a": "29d09196bbff5251b7a564a64b1314cb",
".git/objects/68/cd1325211459bb18dcd1ce46843aec70715df6": "c983a7106b4af1dbf282866002a08dd8",
".git/objects/6b/59835aab554dc2ad05cae5ad74d87ecba1d261": "d47fe5ba77f695ef2921899651ad514e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/dfb57c53625c254a4626bab423e53375ec2e3b": "6b393387f7074981d311af8f19a2cf91",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f64a47fe82027615d42705c0d030219a20e57c": "2cf1f3e0b48d2835dd251474a4149fbc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ac22529bb5598a1e350f2ed66ebef8a2eabb7b": "ea2ef7b3dfa0b6719ca322b72638b75a",
".git/objects/8d/31216dc79d641cd4bca82cd8385ff378f3e5a4": "205c5695caf859e355ae908d033e52c8",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/f328885c690af2eac860b94935ebf1ab60cc7b": "c82811ab3fb581d3ff2067401c39b119",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/4f8e99703238eee4d4c1067266e0fb164e0e20": "d41e69186bf3894269bb43ba52f710a7",
".git/objects/9d/e3c01148f6aa1f740bb26efd66fdc9d14092c6": "1264cb073e58f8870813b70b4352d92b",
".git/objects/9f/dbb22bfc43659210df04d78b9f02d39ffd0272": "51f10ec6896c7a547e7b1e7e7a28b31d",
".git/objects/a1/5f6d041e8565725fee4a9aa1fd9ffd78e2dfdd": "6107fcd3a2a017adcedc88b638ae4b7a",
".git/objects/a5/b0aef98444a4e3d2262e2dab2b8c37820e79a1": "9f897c7379120f12db57de83eceef519",
".git/objects/a6/996041a2a0d40c720ce35f6e0be074e6c14646": "622dc582a4dd671fa7c1523f950db514",
".git/objects/ad/09c62c70533b494d79423f0b5276d36e0fac3f": "876b1916307c3c3f7410c16d6f6480fe",
".git/objects/ad/75808f9f77fd1251ef4a6d68a48c8c0e6d4815": "03c40e97fb1e646e2587eb13015fe2ca",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d931ef37ba41532ae1e627079c23a65004dba6": "ff033c919f34ee3c068003ea7bb0cf57",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f9bb2957dad6f565808b2b043a131125254a7a": "4eeebef0b322796bfbe82671580f023e",
".git/objects/bf/54af6c570cc5734b62a852966c4e2956c7ef09": "0fe6adfda40402ee33eec0262e091a66",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/95314bc4ba13ca02df46f5437c32d7a632d9f0": "43eb1b021ab1c535cbdd9ea47ef839fc",
".git/objects/cc/c0dc85f3d3ccf64b2e045f26ad81d62649224c": "84b60cb2786159c050d857a430256fd4",
".git/objects/cd/58497d8d97000caef736cd658c02e2837dbe91": "9207f8c90108bbba78126d20fb6adca3",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/b729236dfe0927cc45136482a4f61bb60aca77": "111ed60c5117ee43aac1fe6e70be8386",
".git/objects/d1/ea79f461eaffc228f1459cad95a626cb27374d": "3da6ccffb439a7d461e0fb4dd311d047",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/81d36d2cd39ab94c1c880b2953d3f201835840": "d270d97f66da1419d75ecacee7d87052",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0c0ba38334d6488b0df37299b4e281b117c288": "a8ab40a6ddc22b9762323e155e79bd7b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e8/df21b4442741f1a0a9bebaba589389d38bf139": "25030763a68d31ab4e74828ff41a9b86",
".git/objects/e9/20c607ac1600f8663295a8cd4c195c3535be03": "d1cc18863b9703f7502cc6be4ea0d421",
".git/objects/ea/54cdefe8e5e702a981a7ab4d8dcb64cb98f6e0": "bfb81dedf76ad5e9ff799a00b62a915e",
".git/objects/ea/b3c0bc3beee7b5d7b561ed454fccda011610ad": "ab1c0334fc519a95b47c9f6e0709961f",
".git/objects/eb/39edc36c7345778174e206f1fd6dac436243dd": "d868bc14f0f5632592817154e05d5602",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bce9f8c8c78d3c9416417db2467057b664eacd": "014f799e8d3d0b2cf7de5048e171ac3b",
".git/objects/eb/c7ad97a3920c33b9a0d6ae9933763af11d89a4": "3cac1db58ee157b62f29c3b7d5e7b1bc",
".git/objects/ed/22cc7abea10142deeb45cd45dbd09bdac1fb6d": "ef4e06cdf97ac483e6df3428bf4d74b7",
".git/objects/ee/5a93a77935f975ad4b10efec837e37f203adfb": "4acda60e80baf7d337ba9d0d7f9a98f9",
".git/objects/ee/7e8e86f878d9c18e0b8ef263a1890a2df439da": "ad3aceb8a8ecaa285a5388d6dfed8ab3",
".git/objects/ef/d56ebf2abfdd1f7eae49a043ab731c9a995182": "78b2378984d1d396e9d9a37782689049",
".git/objects/f0/6a316a4ef6c021696c561960e900596a4ec13f": "9efbfb2a37a25e242060b821f6b4f28b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0f85743e9776dbae71b172670b21d702624c06": "8bbdccba161f878bc8dea428e9f6418b",
".git/objects/f2/c2dc94ae1bcaf4e3be8bb0d3ce8ba95e25bbc3": "8a7a535d828493fd6dfd9418c1862c00",
".git/objects/f5/8db400ebd8ddc7ddfef00b0a600f4e6d6b4826": "852b0465b48167725173ce5602cad38f",
".git/refs/heads/main": "0c7418153af6e6685237046192f2ad23",
".git/refs/remotes/origin/main": "0c7418153af6e6685237046192f2ad23",
"assets/AssetManifest.bin": "cac85d56cdc8fcd8a0d63947849a73fd",
"assets/AssetManifest.bin.json": "e8128f466ab85ca50516b6e20bf9c5f7",
"assets/AssetManifest.json": "f3fe46eac5b65d39e66b90f0758fa9c3",
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
"assets/assets/image/javascript48.png": "d8b359bb45cbe32632e8fc7901b27615",
"assets/assets/image/javascript60.png": "c91c9214ca3ae67892d3d7216f1b1bf7",
"assets/assets/image/Jdbc.jpeg": "55e5a6fe188e0a2c99ecb8ecfa13f5b0",
"assets/assets/image/jdbc2.jpeg": "f42607e8b1e91648ca58fe8b92d5218b",
"assets/assets/image/LinkedIn.png": "5d1e152e44f5c49715ce75c6c089756c",
"assets/assets/image/LinkedInWhite30.png": "a25d65c874d0a4ad10f47cb25e7cc5e8",
"assets/assets/image/mongodb48.png": "99830feda321b762a5dff7e6eaae7aa6",
"assets/assets/image/mongodb60.png": "b3070fb870f3d9479425a67f27e9da07",
"assets/assets/image/movieflix.jpg": "385dd581551157382b3adb0a483b5cdc",
"assets/assets/image/mysql48.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/assets/image/mysql60.png": "6805ce0d2ea409937a7c97f288c738b2",
"assets/assets/image/react48.png": "3f13950f5b423b82a435afeb633a9e95",
"assets/assets/image/react60.png": "c853c0cd771ed6de90a66e18976d1e77",
"assets/assets/image/sci_cal1.jpg": "b5314e45fb9532b6e41e608e7e65ef71",
"assets/assets/image/springBoot48.png": "3166bf895c1cf47f40f2ee0e94e94e06",
"assets/assets/image/springBoot60.png": "db5561e55df3a1386185f313acb90a41",
"assets/assets/image/whatsapp_orange35.png": "155d53d9760755371f04160a69ff5884",
"assets/FontManifest.json": "00d7b1ce4aa31f8d8070529d700f2d17",
"assets/fonts/MaterialIcons-Regular.otf": "6dbd60c3fa8b84e87bbcd115ef181b83",
"assets/NOTICES": "67ffb90de505e79091f5c613d6f57f67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e91daad71a93463a3b77c3525227020e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd7f21c7a0fda340218fba5d4d21783d",
"/": "fd7f21c7a0fda340218fba5d4d21783d",
"main.dart.js": "e0273c1f318642e12ace6c4e7fc8662d",
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
