const cliente = 'Juan' //Ventana global

function mostrarCliente() {
    //Scoope por bloque, solo dentro de la funcion
    console.log(cliente)
}

mostrarCliente()