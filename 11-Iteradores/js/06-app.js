//forEach y forMap 

//El forEach es ideal para recorrer elementos 
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

pendientes.forEach((pendiente, i)=>{
    console.log(`${i}: ${pendiente}`);
}); 

const carrito = [
    {nombre: 'tablet', precio:100}, 
    {nombre: 'monitor de 24 pulgadas', precio:200},
    {nombre: 'pc', precio:1000, descuento: true},
    {nombre: 'celular', precio:400},
    {nombre: 'teclado mecanico', precio:500}, 
    {nombre: 'audifonos', precio:250}
]

carrito.forEach( (producto, index) =>{
    console.log(`${index}: ${producto.nombre}`)
})

carrito.map( (producto, index) =>{
    console.log(`${index}: ${producto.nombre}`)
})

//Esta map que es casi solo lo mismo solo que map te crea un arreglo nuevo y forEach no