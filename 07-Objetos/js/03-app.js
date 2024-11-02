//Un objeto agrupa todo en una varible 

//Object literal 
const precio = {
    nombre: 'Juan',
    precion : 300, 
    disponible: true 
}

console.log(precio)

//Agregar propiedades al objeto 

precio.imagen= 'Imagen.jpg'

//Eliminar propiedades del objeto
delete precio.disponible; 


console.log(precio)