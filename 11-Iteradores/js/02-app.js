//Iteradores: Breack y continue 
//Breack corta la ejecucion de for loop y 
//continue nos permite interceptar un elemento, identificarlo y continuar la ejecucion de for loop

for (let i=0; i<10; i++) {
    if (i ===5 ) {
        
    console.log("Este es el:",i.toString())
    //Para detener el for 
    break;
    //continue; 
    }
    console.log('numero', i);
}

const carrito = [
    {nombre: 'tablet', precio:100}, 
    {nombre: 'monitor de 24 pulgadas', precio:200},
    {nombre: 'pc', precio:1000, descuento: true},
    {nombre: 'celular', precio:400},
    {nombre: 'teclado mecanico', precio:500}, 
    {nombre: 'audifonos', precio:250}
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo: ${carrito[i].nombre} Tiene descuento`); 
        continue;
    }
    console.log(carrito[i].nombre);
}
