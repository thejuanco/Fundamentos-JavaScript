//Ejemplos mas avanzados de js 
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer')

//Registrar el evento 
btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter() {
//Contains nos permite verificar si un elemento tiene o no tiene una clase 
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda'
    } else {
        footer.classList.add('activo'); 
        this.classList.add('activo');
        this.textContent = 'X Cerrar'
    }
}