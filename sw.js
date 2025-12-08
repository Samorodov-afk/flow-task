const CACHE_NAME = 'flowtask-v1.2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './offline.html',
  // Основные модули (добавляем для офлайна)
  './js/app.js',
  './js/auth.js',
  './js/state.js',
  './js/tasks.js',
  './js/categories.js',
  './js/ui.js',
  './js/storage.js',
  './js/utils.js',
  './js/dom-cache.js',
  './js/validators.js',
  './js/translations.js',
  './js/analytics.js'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Кэш открыт');
        return cache.addAll(urlsToCache).catch(err => {
          console.log('Ошибка кэширования:', err);
          // Продолжаем работу даже если некоторые ресурсы не закэшировались
          return Promise.resolve();
        });
      })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Перехват запросов (stale-while-revalidate + офлайн-страница)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Пропускаем запросы к внешним ресурсам (CDN), не-GET, и неподдерживаемые схемы
  const isExternal = request.url.startsWith('http') && !request.url.startsWith(self.location.origin);
  const isUnsupportedScheme = request.url.startsWith('chrome-extension:') || 
                                request.url.startsWith('moz-extension:') ||
                                request.url.startsWith('safari-extension:') ||
                                request.url.startsWith('edge:');
  
  if (isExternal || request.method !== 'GET' || isUnsupportedScheme) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    const networkFetch = fetch(request)
      .then(response => {
        // Проверяем схему перед кэшированием
        const url = new URL(request.url);
        const canCache = url.protocol === 'http:' || url.protocol === 'https:';
        
        if (response && response.status === 200 && response.type === 'basic' && canCache) {
          try {
            cache.put(request, response.clone());
          } catch (err) {
            // Игнорируем ошибки кэширования для неподдерживаемых схем
            console.warn('Cache put failed:', err);
          }
        }
        return response;
      })
      .catch(() => undefined);

    // stale-while-revalidate: отдаем из кэша, параллельно обновляем
    if (cachedResponse) {
      // обновляем в фоне
      networkFetch.catch(() => {});
      return cachedResponse;
    }

    const networkResponse = await networkFetch;
    if (networkResponse) return networkResponse;

    // Фолбэк для страниц
    if (request.destination === 'document') {
      return cache.match('./offline.html') || cache.match('./index.html');
    }

    return cache.match(request);
  })());
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
