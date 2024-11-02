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

const producto4 = {
    nombre: 'laptop', 
    precio: 2000
}
//.unshift para agregar productos al inicio del arreglo 
carrito.unshift(producto3)
carrito.push(producto4)
console.table(carrito)

//Eliminar ultimo elemento de un arreglo 
// carrito.pop(); 

// console.table(carrito)

// Eliminar el primer elemento de un arreglo c
// carrito.shift()
// console.table(carrito)

//Eliminar del medio con splice 
carrito.splice(1, 1)
console.table(carrito)