//Notificaciones
const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  //Solicitamos al usuario permiso para enviarle notificaciones
  Notification.requestPermission().then((resultado) => {
    console.log("El resultado es ", resultado);
  });
});

const verNotificacionBtn = document.querySelector("#verNotificacion");

//Ver las notificaciones nativas
verNotificacionBtn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const notificacion = new Notification("Esta es la notificación", {
      //Agregar opciones
      //Icono
      icon: "img/ccj.png",
      //Cuerpo
      body: "Código con Juanco, los mejores tutoriales",
    });

    //Cuando le demos click lleva a una url
    notificacion.onclick = () => {
      //Manera de dirigir al sitio, cuando damos click a una notificacion
      window.open("https://www.codigoconjuan.com");
    };
  }
});
