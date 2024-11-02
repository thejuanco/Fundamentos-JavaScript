import { imprimirAlerta } from "./funciones.js"

(function(){    
    let DB
    var idCliente

    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', function(){
        conectarDB()

        formulario.addEventListener('submit', actualizarCliente)
        //Verificar el id de la url
        const parametrosUrl = new URLSearchParams(window.location.search) //Nos da los parametros en la url

        idCliente = parametrosUrl.get('id')

        idCliente ? setTimeout(() => { obtenerCliente(idCliente) }, 100) : null
    })

    function actualizarCliente(e){
        e.preventDefault()

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error')

            return;
        }

        //Actualizar el cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            //Por defecto el idCliente, es un string, lo convertimos a número
            id: Number(idCliente)
        };

        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        objectStore.put(clienteActualizado)

        transaction.oncomplete = function(){
            imprimirAlerta('Editado correctamente')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error', 'error')
        }
    }

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')
        
        const cliente = objectStore.openCursor()
        cliente.onsuccess = (e) => {
            const cursor = e.target.result

            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value)
                }
                cursor.continue()
            }
        }
    }

    function llenarFormulario(datosCliente){
        const { nombre, email, telefono, empresa } = datosCliente
        
        //Poner los datos en el formulario  
        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
    
    }

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onerror = function(){
            console.error('Hubo un error')
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result
        }
    }
})()

//7:32 100%