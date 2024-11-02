//Inputs 

const formularios = document.querySelector('#formulario');

formularios.addEventListener('click' ,validarFormulario)

function validarFormulario (e){
    e.preventDefault();

    console.log('Buscando...')

    console.log(e.target.action)
}