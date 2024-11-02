//Iteradores en JS
function crearIterardor (carrito){
    let i = 0;

    return {
        siguiente: () => {
            //Conocer el numero de elementos
            const fin = (i >= carrito.length)
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin, valor
            }
        }
    }
}

//Arreglo sobre el cual vamos a iterar
const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

//Utilizar el iterador
const recorrerCarrito = crearIterardor(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());