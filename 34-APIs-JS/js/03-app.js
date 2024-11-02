//Verificar si tenemos conexcion a internet
window.addEventListener("online", actualizarEstado)
window.addEventListener("offline", actualizarEstado)

function actualizarEstado() {
    //navigator.onLine nos permite saber si estas conectado a internet o no
    if (navigator.onLine) {
        console.log("Si estas conectado")
    } else {
        console.log("Parece que has perdido tu conexion...")
    }
}