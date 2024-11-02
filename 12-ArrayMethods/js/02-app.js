const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Conocer el indice de con forEach 
meses.forEach((mes, i)=>{
    if(mes === 'Abril'){
        console.log(`Encontrado en el indice: ${i}`)
    }
})

//Encontrar el indice con .findIndex 
const inidice = meses.findIndex(mes => mes === 'Abril');
console.log(inidice)
//Cuando le pasamos un valor que no existe findIndex retorna un -1 que significa que no lo pudo encontrar 

//Ejemplo con el carrito 
const car = carrito.findIndex(item => item.precio === 100)
console.log(car)