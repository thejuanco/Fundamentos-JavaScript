//Obtener los valores del localstorage 

const nombre = localStorage.getItem('meses');
console.log(nombre);

//parse convierte el string en un objeto o arreglo simpre y cuando tenga la forma adecuada
const productoJSON = localStorage.getItem('nombre');
console.log(JSON.parse(productoJSON));