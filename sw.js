// 홈 화면 설치를 위해 필요한 작은 파일입니다.
// 화면을 따로 저장(캐시)하지 않고 항상 인터넷에서 최신 내용을 받아오므로,
// index.html을 고쳐서 올리면 바로 반영됩니다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
