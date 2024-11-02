//Eliminar elementos del dom 

// const primerEnlace = document.querySelector('a'); 
// primerEnlace.remove(); 

//Eliminar desde el padre 
const navegacion = document.querySelector('.navegacion'); 
console.log(navegacion.children);

navegacion.children.remove([2]); 
