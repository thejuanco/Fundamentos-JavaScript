//Metodos en los arreglos
// const meses = ['enero', 'febrero', 'marzo']
// console.table(meses)

//agregar al final de arreglo 
// meses.push('abril')
// console.table(meses)

//TODO: Creando un carrito de compras
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

//.push para agregar valores al final de arreglo
carrito.push(producto)
carrito.push(producto2)

const producto3 = {
    nombre: 'teclado',
    precio: 200
}
//.unshift para agregar productos al inicio del arreglo 
carrito.unshift(producto3)


console.table(carrito)
