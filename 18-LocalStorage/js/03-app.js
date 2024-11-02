//para eliminar un elemento del localStorage se utiliza remove Item 
localStorage.removeItem('meses')

//Actualizar un registro
const producto = JSON.parse(localStorage.getItem('nombre'))
console.log(producto)
//Solo se pueden reescribir los datos en el localStorage

//localStorage.clear() elimina todo lo que esta ahi 
localStorage.clear()