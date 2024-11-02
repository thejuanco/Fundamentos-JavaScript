//Follow (organizar codigo)

const mostrarCliente = (nombre) => {
    console.log(nombre);
}

export default mostrarCliente

//Forma antigua
const modulo1 = (function(){
    const nombre = 'Juan'

    function hola(){
        console.log('Hola')
    }

    return {
        hola,
        nombre
    }
})()