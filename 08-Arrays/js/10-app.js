//FOR para recorrer los elementos de un arreglo 
const carrito = [
    {nombre: 'tablet', precio:100}, 
    {nombre: 'monitor de 24 pulgadas', precio:200},
    {nombre: 'pc', precio:1000},
    {nombre: 'celular', precio:400},
    {nombre: 'teclado mecanico', precio:500}, 
    {nombre: 'audifonos', precio:250}
]

const nuevaArreglo2 = carrito.map( function(producto){
    return `${producto.nombre} - ${producto.precio}`
})
//Map y forEach son practicamente iguales solo que map va llenar una variable con un arreglo nuevo

console.warn('--------------------------------------')

const nuevoArreglo = carrito.forEach( function(producto){
    return `${producto.nombre} - ${producto.precio}`
})

console.log(nuevoArreglo)
console.log(nuevaArreglo2)