//Eventos que suceden con el mouse 

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('click en el nav'); 
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en el nav'); 
})

nav.addEventListener('mouseout', () => {
    console.log('sliendo del nav'); 
    nav.style.backgroundColor = 'white'; 
})

//mousedown es similar al click
//mouseup es cuando sueltas el mouse