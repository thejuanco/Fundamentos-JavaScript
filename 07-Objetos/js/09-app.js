//Object literal 
const producto = {
    nombre: 'Juan',
    precion : 300, 
    disponible: true 
}

//Usando el metodo seal 
Object.seal(producto)
//La diferencia con freeze es que no se pueden añadir ni eliminar las propiedades del objeto 
//pero si modificar su contenido 

producto.disponible= false 

console.log(producto)
console.log(Object.isSealed(producto))