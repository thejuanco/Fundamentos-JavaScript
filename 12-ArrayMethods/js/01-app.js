//.some 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo
meses.forEach((mes)=>{
    if(mes === 'Enero'){
        console.log('Enero si existe') //Forma tradicional de hacerlo 
    }
})

//Con .includes que retorna un valor 
const resultado = meses.includes('Enero');
console.log(resultado);

//En un arreglo de objetos se utiliza .some 
const resultado2 = carrito.some((item)=>{
    return item.nombre === 'Monitor 27 Pulgadas';
})
console.log(resultado2);

//En un arreglo de objetos se utiliza.every