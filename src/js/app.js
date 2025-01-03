var deferredPrompt;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg)=> {
      console.log('Service Worker Registered!', reg);
    });
}

window.addEventListener( 'beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  return false;
});