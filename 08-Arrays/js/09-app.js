//FOR para recorrer los elementos de un arreglo 
const carrito = [
    {nombre: 'tablet', precio:100}, 
    {nombre: 'monitor de 24 pulgadas', precio:200},
    {nombre: 'pc', precio:1000},
    {nombre: 'celular', precio:400},
    {nombre: 'teclado mecanico', precio:500}, 
    {nombre: 'audifonos', precio:250}
]

//recorrer el arreglo con un for
for(let i=0; i < carrito.length; i++ ){
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`)
}

console.warn('--------------------------------------')

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`)
})