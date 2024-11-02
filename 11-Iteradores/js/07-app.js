//for of 

//es una version simplificada de for 
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

const carrito = [
    {nombre: 'tablet', precio:100}, 
    {nombre: 'monitor de 24 pulgadas', precio:200},
    {nombre: 'pc', precio:1000, descuento: true},
    {nombre: 'celular', precio:400},
    {nombre: 'teclado mecanico', precio:500}, 
    {nombre: 'audifonos', precio:250}
]

//en el for of le damos un alias por asi decirlo 
for (let pendiente of pendientes){
    //este itera sobre los elementos de un arreglo y le asigna pendiente 
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(producto.nombre)
}