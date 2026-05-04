const CACHE_NAME = 'canto-30-v7';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap',
    'https://unpkg.com/@phosphor-icons/web'
];

// Instalação do Service Worker e Cache dos Assets Iniciais
self.addEventListener('install', event => {
    // Força a instalação imediata do novo service worker
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
    );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
    // Força o novo service worker a assumir o controle imediatamente
    event.waitUntil(self.clients.claim());
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Estratégia Network First (Tenta a rede primeiro, se falhar, usa o cache)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(fetchRes => {
            // Se a requisição deu certo, atualiza o cache e retorna
            return caches.open(CACHE_NAME).then(cache => {
                if(event.request.method === 'GET' && event.request.url.startsWith('http')){
                    cache.put(event.request.url, fetchRes.clone());
                }
                return fetchRes;
            });
        }).catch(() => {
            // Se falhou (offline), busca no cache
            return caches.match(event.request);
        })
    );
});
