// Selectores
const pacienteInput = document.querySelector('#paciente')
const propietarioInput = document.querySelector('#propietario')
const emailInput = document.querySelector('#email')
const fechaInput = document.querySelector('#fecha')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#formulario-cita')
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]')
const contenedorCitas = document.querySelector('#citas')

export {
    pacienteInput,
    propietarioInput,
    emailInput,
    fechaInput,
    sintomasInput,
    formulario,
    formularioInput,
    contenedorCitas
}