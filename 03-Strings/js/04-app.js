//Cortar espacios en blanco en un String 

const producto = '             Hola soy un espacio      '
console.log(producto)
console.log(producto.length)

//Eliminado espacios 
//Utilizaremos el metodo trimStart()
//trimStart se utiliza para eliminar espacios al principio 
console.log(producto.trimStart())
//trimEnd se utiliza para eliminar espacios al final 
console.log(producto.trimEnd())

//Unimos los metodos 
console.log(producto.trimStart().trimEnd())
console.log(producto.trim())