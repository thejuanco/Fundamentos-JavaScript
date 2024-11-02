import { imprimirAlerta, conectarDB } from "./funciones.js";

(function(){
    let DB

    const formulario = document.getElementById('formulario')
    document.addEventListener('DOMContentLoaded', function(){

        conectarDB()
        formulario.addEventListener('submit', validarCliente)
    });


    function validarCliente(e){
        e.preventDefault()
        
        //Leer todos los inputs
        const nombre = document.getElementById('nombre').value
        const email = document.getElementById('email').value
        const telefono = document.getElementById('telefono').value
        const empresa = document.getElementById('empresa').value

        //Validacion de campos
        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            //Imprimir la alerta
            imprimirAlerta('Todos los campos son obligatorios', 'error')
            return
        }

        //Crar un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        }

        //Agregar el id al objeto cliente
        cliente.id = Date.now()

        crearNuevoCliente(cliente)

        //Reiniciar un formulario
        formulario.reset()
        
    }

    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        objectStore.add(cliente)

        transaction.onerror = () => {
            console.error('Hubo un error')
        }

        transaction.oncompleted = () => {
            imprimirAlerta('El cliente se agrego correctamente', 'success')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);

        }
    }

    
})()