//En el functional js se busca que el codigo sea más corto

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

//Forma larga
const obtenerNombres = producto => {
    return producto.nombre
}

//Forma corta
const obtenerNombress = p => p.nombre

// Ahora con el map, podemos obtener un nuevo array con los nombres de los productos
const resultado = carrito.map(obtenerNombress)
console.log(resultado)

const mayor400 = p => p.precio

const resultado2 = carrito.filter(mayor400)
console.log(resultado2)