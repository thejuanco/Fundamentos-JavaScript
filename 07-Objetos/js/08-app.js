//Habilitando el modo estricto 
"use strict"
//Una vez habilitado el modo estricto tenemos una serie de metodos habilitados para objetos 

//Object literal 
const producto = {
    nombre: 'Juan',
    precion : 300, 
    disponible: true 
}

//La propiedad freeze no permite hacerle modificaciones a un objeto 
Object.freeze(producto)

console.log(producto)
console.log(Object.isFrozen(producto))




