if('serviceWorker' in navigator){
    //Registrar el service worker
    navigator.serviceWorker.register('./sw.js')
        .then(register => console.log('Registered service worker', register))
        .catch(error => console.error('Register failed', error))
} else {
    console.log('Service worker is not available')
}