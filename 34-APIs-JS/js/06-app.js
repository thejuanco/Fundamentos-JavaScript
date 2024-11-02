//Speech Recognition
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    //Solicitar el permiso al usuario
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    //iniciar la api
    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = "Escuchando"
    }

    recognition.onspeechend = function() {
        salida.textContent = "Se dejo de gravar"
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0])

        //Extraer el dicatado 
        const { confidence, transcript }= e.results[0][0];
        console.log(confidence, transcript);


        const speech = document.createElement('p')
        speech.innerHTML = `Grabado: ${transcript}`;

        //Mostrar la exactitud del transcript
        const seguridad = document.createElement('p')
        seguridad.innerHTML =  `Exactitud:  ${ parseInt( confidence*100) } %`;

        salida.appendChild(speech)
        salida.appendChild(seguridad)
    }

}