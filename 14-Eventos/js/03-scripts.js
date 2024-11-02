//Eventos en los inputs 

const busqueda = document.querySelector('.busqueda'); 

// busqueda.addEventListener('keydown', () => {
//     Keydown se ejecuta cuando escribimos una tecla 
//     console.log('Escribiendo'); 
// })

// busqueda.addEventListener('copy', () => {
//     copy se ejecuta cuando copiamos texto  
//     console.log('copiando'); 
// })

// busqueda.addEventListener('cut', () => {
//     cut se ejecuta cuando cortamos texto  
//     console.log('cortando'); 
// })

// busqueda.addEventListener('paste', () => {
//     paste se ejecuta cuando pegamos texto  
//     console.log('pegando');
// })

busqueda.addEventListener('input', (e) => {
    //En los parentesis se pasa el evento que esta sucediendo 
    //Keydown se ejecuta cuando escribimos texto  
    console.log(e.target.value); 
})