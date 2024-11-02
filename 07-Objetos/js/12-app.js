//Creado objetos con object constructor 

//Object literal 
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio : 300, 
    disponible: true
}

//Object constructor 
function Productos (nombre, precio){
    this.nombre = nombre, 
    this.precio = precio, 
    this.disponible = true
}

const Productoss = new Productos('Mouse', 1000)
console.log(Productoss)