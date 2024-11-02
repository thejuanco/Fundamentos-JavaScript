const nombreCache = 'apv-v3'
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

self.addEventListener("install", (e) => {
  console.log("Service installed");
  //Este metodo se ejecuta una vez

  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("Cargando archivos cache...");
      return Promise.all(
        archivos.map((archivo) => 
          cache.add(archivo).catch((error) => console.error(`Error al cachear ${archivo}:`, error))
        )
      );
    }).catch((error) => {
      console.error("Error general al cargar en la caché:", error);
    })
  );

  e.webUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service activated')
    console.log(e)
})

//Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch..
self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e)
    // Este metodo se ejecuta cada vez que se hace un fetch al sitio web

    e.respondWith(
      caches
        .match(e.request)
        .then((respuestaCache) => {
          return respuestaCache || fetch(e.request);
        })
        .catch(() => caches.match("/error.html"))
    );
  
})