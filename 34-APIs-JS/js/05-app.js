//Detectar cuando estamos viendo una pagina web
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState){ //Visibilizar la pagina
        console.log('Ejecuar la funcion para reproducir el video');
    } else {
        console.log('Pausar el video')
    }
})