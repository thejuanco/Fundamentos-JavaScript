//Symbol

const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log(sym === sym2 ? 'Son iguales' : 'No son iguales')

//? Todos los symbol son unicos y diferentes por lo tanto no hay dos iguales

const apellido = Symbol()
const nombre = Symbol()

let persona = {}

//Agregar nombre y apellido
persona[nombre] = 'Juan'
persona[apellido] = 'Cruz'
persona.tipoCliente = 'Premium'
persona.saldo = 500 

console.log(persona)

//Para acceder a la propiedad de nombre se ocupan corchetes
console.log(persona[nombre])
//Las propiedades que utilizan un Symbol no son iterables
/*
    Cuando se crea un Symbol se puede hacer una descripción del mismo
*/

const nombreCliente = Symbol('Nombre del Cliente')
const cliente = {}
cliente[nombreCliente] = 'Pedro'
console.log(cliente[nombreCliente])
//Acceder a la descripcion del Symbol
console.log(nombreCliente)