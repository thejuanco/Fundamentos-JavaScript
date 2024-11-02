//Event Bubbling 
//Es cuando presionas un evento y el evento se propaga por otros no esperados 

 // tenemos diferentes cards, con información...
//  vamos a crear 3 selectores

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click card');
})

//Para evitar que los eventos se propaguen se añade el stopPropagation en el evento. 

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})
titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})
