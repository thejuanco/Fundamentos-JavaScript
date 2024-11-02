//Fetch API
//Fechar solo puede leer texto
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    //en el parametro va la url
    const url = 'data/datos.txt'

    fetch(url)
       .then(respuesta => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            console.log(respuesta.url)

            return respuesta.text()
        })
        .then(datos =>{
            console.log(datos)
        })
        .catch(error => console.log(error))
}