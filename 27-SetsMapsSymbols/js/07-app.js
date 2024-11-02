//Generadores en js
//Son funciones especiales que pausan su ejecucion y luego continuan desde donde se quedaron

//Para crearlas se utiliza: function* 
function* generador(){
    yield 1;
    yield 'Juan'
    yield 3+3
    yield true //yield extrae los valores
}

const iterador = generador()

console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next())
//El generador ya esta terminado
console.log(iterador)

//Generador para carrito de compras
function* generadorCarrito(carrito){
    for(let i=0; i<carrito.length; i++){
        yield carrito[i]
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

const iteradorDos = generadorCarrito(carrito)
console.log(iteradorDos.next().value)
console.log(iteradorDos.next())
console.log(iteradorDos.next())
console.log(iteradorDos.next())
console.log(iteradorDos.next())