const sidebar = document.getElementById('sidebar')


function togglesidebar(){
  sidebar.classList.toggle('show')
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwabuilder-sw.js')
            .then(reg => console.log('Service Worker registered!', reg))
            .catch(err => console.log('Service Worker registration failed', err));
    });
}