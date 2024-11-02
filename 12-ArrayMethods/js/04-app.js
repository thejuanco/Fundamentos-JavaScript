// .filter 
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado 

//Filter nos devuelve los elementos que cumplen con la condicion 
resultado = carrito.filter(producto => producto.precio >= 400)

resultado = carrito.filter(producto => producto.precio < 600)

//Nos devuelve todos los elementos menos el celular
resultado = carrito.filter(producto => producto.nombre !== 'Celular')

console.log(resultado)