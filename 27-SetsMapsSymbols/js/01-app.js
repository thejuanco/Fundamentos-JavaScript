//Creando Set
const carrito = new Set()

//Para agregar elementos al Set
carrito.add('Camisa') //Los sets solo son valores
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')
//Los sets no agregan valores repetidos, pero si hacen diferencias entre minusculas y mayusculas
carrito.add('camisa')

//Verificar si existe un elemento dentro del set
console.log(carrito.has('camisa'))

//Eliminar un elemento del set
console.log(carrito.delete('short')) //Devuelve un booleano

//Elimiar todos los elemtos del set
// carrito.clear();

//Ver los elementos del set
console.log(carrito.size)

console.log(carrito)

//? Los sets son iterables
carrito.forEach((producto, index) => {
    console.log(index)
})

//Ejemplo del uso de un set, donde eliminamos los duplicados
let numeros = [10, 20, 30, 40, 50, 10, 20]
const noduplicados = new Set(numeros)
console.log(noduplicados)