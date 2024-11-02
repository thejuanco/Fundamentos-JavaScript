import {obtenerCliente, editarCliente} from './API.js'
import { mostrarAlerta, validar } from "./funciones.js";

(function(){
    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search)

        const idCliente = parseInt(parametrosURL.get('id'))
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente)

        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente){
        const {id, nombre, empresa, email, telefono} = cliente

        //Llenando los campos
        document.getElementById('id').value = id
        document.getElementById('nombre').value = nombre
        document.getElementById('empresa').value = empresa
        document.getElementById('email').value = email
        document.getElementById('telefono').value = telefono
    }

    function validarCliente(e){
        e.preventDefault()

        const cliente = {
            id: parseInt(document.getElementById('id').value),
            nombre: document.getElementById('nombre').value,
            empresa: document.getElementById('empresa').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value
        }

        if(validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribir el cliente
        editarCliente(cliente)
        
    }
})();