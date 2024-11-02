//spread operator 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Agregar un elemento al final del arreglo 
const meses2 = [...meses, 'Agosto']
console.log(meses2) //Esto no modifica el arrglo orignal 
//El orden es importante 

const producto = {nombre: 'SSD', precio: 350}
//Uniendolo a carrito 
const carrito2 = [...carrito, producto]
//Al añadir el producto no se le agregan los puntos 
console.log(carrito2) 