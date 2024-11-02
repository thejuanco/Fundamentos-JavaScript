//Desestructuracion de Objetos 
const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300, 
    disponible: true
}

console.log(producto)

const {nombre} = producto

console.log(nombre)

//Desustructuracion de arreglos 
const numeros = [10, 20, 30, 40, 50]
const [primero] = numeros
console.log(primero)

const [,,tercero] = numeros
console.log(tercero)

//obteniendo datos pero los restantes se agrupan en su propio arreglo 
const [uno, dos, ...tres] = numeros
console.log(tres)