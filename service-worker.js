self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('wacky-cache').then((cache) => 
        cache.addAll([
          './wacky.html',
          './manifest.json',
          './icon-192.png',
          './icon-512.png',
          'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js'
        ])
      )
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });
  