let DB;

//IndeXDB
document.addEventListener('DOMContentLoaded', function(){
    crmDB();

    setTimeout(() => {
        crearCliente()
    }, 3000);
})

function crmDB() {
    //Crear base de datos, version 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    //Existe un error
    crmDB.onerror = function(){
        console.log('Error al crear la base de datos');
    }

    //Si se creo de manera correcta
    crmDB.onsuccess = function(){
        console.log('Se creo correctamente');

        DB = crmDB.result
    }
    
    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        // console.log('Este metodo solo se ejecuta una vez')
        //Visualizondo el resultado
        const db = e.target.result

        //Interactuar con la base de datos
        const objectStore = db.createObjectStore('crm', { //Esta funcion recibe 2 argumentos, es la base de datos, y un obj de configuracion
            keyPath: 'crm', //Es la forma en la que se hace referencia
            autoIncrement: true,
        });

        //Definir las columnas de la base de datos
        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'nombre', {unique: true})

        console.log('Columnas creadas');
    }
}

//Insertar en la base de datos
function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function(){
        console.log('Transaction completed');
    }

    transaction.onerror = function(){
        console.log('Transaction failed')
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente = {
        nombre: 'Juna',
        email: 'nuevo@correo.com'
    }
    
    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion)
}