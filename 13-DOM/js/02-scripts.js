//Seleccionar elementos por su clase 

const header = document.getElementsByClassName('header');
console.log(header); 

const hero = document.getElementsByClassName('hero'); console.log(hero);

//Si las clases existen mas de una vaz 
const contendores = document.getElementsByClassName('contenedor|contenedor'); console.log(contendores);

//Si una clase no existe 
const noExiste = document.getElementsByClassName('no-existe'); console.log(noExiste);