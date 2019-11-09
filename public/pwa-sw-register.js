if ('serviceWorker' in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log('[PWA] active service worker found, no need to register');
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register('pwa-sw.js', {
        scope: './',
      })
      .then(function() {
        console.log('[PWA] Service worker has been registered');
      });
  }
}
