(function() {
    //Se le asigna el valor de la base de datos
    let DB
    const listadoClientes = document.querySelector('#listado-clientes')

    document.addEventListener('DOMContentLoaded', function() {
        crearDB()

        window.indexedDB.open('crm', 1) ? obtenerClientes() : console.log('No se puedieron obtener los clientes')

        listadoClientes.addEventListener('click', eliminarRegistro)
    });

    function eliminarRegistro(e){
    //Verificamos que elemento contega la clase eliminar
        if(e.target.classList.contains('eliminar')){
            const idEliminar = Number(e.target.dataset.cliente)
            
            const confirmar = confirm('Deseas eliminar el cliente?')
            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite')
                var objectStore = transaction.objectStore('crm')

                objectStore.delete(idEliminar)

                transaction.oncomplete = function(){
                    e.target.parentElement.parentElement.remove()
                }

                transaction.onerror = function(){
                    console.log('Hubo un error')
                }
            }
        }
    }

    //Crea la base de datos de IndexDB
    function crearDB() {
        //Creando la conexcion con la base de datos
        const crearDB = window.indexedDB.open('crm', 1)

        crearDB.onsuccess = function(){
            DB = crearDB.result
        }

        crearDB.onerror = function(){
            console.log('Hubo un error')
        }

        crearDB.onupgradeneeded = (e) => {
            const db = e.target.result

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            })

            objectStore.createIndex('nombre', 'nombre', {unique: false})
            objectStore.createIndex('email', 'email', {unique: true})
            objectStore.createIndex('telefono', 'telefono', {unique: false})
            objectStore.createIndex('empresa', 'empresa', {unique: false})
            objectStore.createIndex('id', 'id', {unique: true})

            console.log('DB lista y creada')
        }
    }

    function obtenerClientes(){
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
            
            const objectStore = DB.transaction('crm').objectStore('crm')

            objectStore.openCursor().onsuccess = function(e){
                //El cursos es el iterador
                const cursor = e.target.result

                if(cursor){
                    const { nombre, empresa, email, telefono, id } = cursor.value

                    listadoClientes.innerHTML +=
                    ` <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;
                    
                    //Listarlos en el HTML
                    cursor.continue()

                } else {    
                    console.log('No hay mas registros...')
                }
            }
        }

        abrirConexion.onerror = function(){
            console.log('Hubo un error')
        }    
    }
})()