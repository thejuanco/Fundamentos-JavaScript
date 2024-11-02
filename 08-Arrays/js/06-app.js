//agregar elementos al inico con rest operator 
const carrito = []

//definir el producto 
const producto = {
    nombre: 'Monitor de 24 pulgadas', 
    precio: 300
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

const producto3 = {
    nombre: 'teclado',
    precio: 200
}

let resultado

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]

console.table(resultado)