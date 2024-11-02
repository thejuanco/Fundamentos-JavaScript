//Eventos con el scroll 
//Window es la ventana global de la pagina 

window.addEventListener('scroll', () => {
    //console.log('Scroll...'); 

    //Detectando el scroll vertical 
    // const scrollY = window.scrollY; 
    // console.log(scrollY)

    //Detectar un elemento 
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 784){
        console.log('El elemento ya esta visible')
    } else {
        console.log('Aun no esta visible'); 
    }
})
