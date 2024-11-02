//variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListener();

function eventListener(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets)
        crearHTML()
    })
}

function agregarTweet(e){
    e.preventDefault();
    
    //textarea
    const tweet = document.querySelector('#tweet').value
    //validadion
    if (tweet === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return
    }
    //Crear un objeto 
    const tweetObj = {
        id: Date.now(),
        tweet,
    }

    //añadir al arreglo de tweet
    tweets = [...tweets, tweetObj]

    //una vez agregado 
    crearHTML()

}

//mostrar mensaje de error 
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    //Insertar el error en el contenido 
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    //Elimina la alerta despues de 3 segundos
    setTimeout( () => {
        mensajeError.remove()
    }, 3000);

}

//muestra un listado de los tweets 
function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //agregar un boton de eliminar 
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText='x'

            //añadir la funcion de eliminar 
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id)
            }

            //Crear el html 
            const li = document.createElement('li');
            //añadir el texto 
            li.innerText = tweet.tweet
            li.appendChild(btnEliminar);
            //insertar en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

//Agrega los tweets actuales al storage 
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Elimina un tweet 
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHTML()
}

// Elimina las tareas enel DOM
function limpiarHTML() {
    while(listaTweets.firstChild) {
         listaTweets.removeChild(listaTweets.firstChild);
    }
}