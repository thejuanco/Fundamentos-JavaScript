const url = 'http://localhost:4000/clientes'

//Se crea un  nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, { //Objeto de configuracion
            method: 'POST', //Definiendo el metodo
            headers: { //Tipo de dato que estas enviando
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        window.location.href = 'index.html' //Enviar al index
    } catch (error) {
        console.log(error)
    }
}

//Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json()
        return clientes
    } catch (error) {
        console.log(error)
    }
}

//Elimina un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

//Obtener un cliente por id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return cliente
    } catch (error) {
        console.log(error)
    }
}

//Editar un cliente
export const editarCliente = async cliente => {
    console.log(cliente)
    try {
        fetch(`${url}/${cliente.id}`, { //Agregando el id a la URL
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        window.location.href = 'index.html' //Regresar al index
    } catch (error) {
        console.log(error)
    }
}