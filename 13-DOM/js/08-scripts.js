//Recorer el dom,como si fuera un mapa 

//const navegacion = document.querySelector('.navegacion');
//console.log(navegacion);
//Acceder a los nodos 
//console.log(navegacion.childNodes); //Los espacios en blancon son considerados elementos 
//console.log(navegacion.children)
//Solo enlista elementos que sean reales en el html 

const card = document.querySelector('.card')

console.log(card.children[1].children)

//Traversign del hijo al padre 
console.log(card.parentElement.parentElement); 

//Selecionar el siguiente elemento 
console.log(card.nextElementSibling.nextElementSibling)