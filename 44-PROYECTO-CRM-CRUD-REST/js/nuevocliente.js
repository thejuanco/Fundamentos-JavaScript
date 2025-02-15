import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";
import { validar } from "./funciones.js";

(function(){
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', validarCliente)

    function validarCliente(e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        const cliente = {
            nombre, 
            email,
            telefono,
            empresa,
        }

        if(validar(cliente)){
            //Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios')
            return
        } else {
            nuevoCliente(cliente)
        }   
    }
})();