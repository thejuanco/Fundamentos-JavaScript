//Self = ventana global

window.onload = () => {
    console.log('Ventana lista');
}

window.nombre = "Monitor 24 pulgadas" //Se alamacena en la ventana global

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        // const self = this;
        return `El Producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo())