//Closures -> forma de acceder a una funcion desde el exterior

const obtenerClientes = () => {
    const nombre = 'Juan'

    function muestraNombre(){
        console.log(`Hola, mi nombre es ${nombre}`)
    }

    return muestraNombre
}

const cliente = obtenerClientes()
cliente()