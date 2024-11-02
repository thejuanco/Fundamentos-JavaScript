const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

//Similar a documentContentLoaded event
window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  //Validar el formulario
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (pais === "" || ciudad === "") {
    //Hubo un error
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  //Consultar la API
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta) {
        const alerta = document.createElement("div");
        alerta.classList.add(
            "bg-red-100",
            "border-red-700",
            "text-red-800",
            "px-4",
            "py-3",
            "rounded-lg",
            "max-w-md",
            "mx-auto",
            "mt-6",
            "text-center"
        );

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);

        //Eliminar la alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultarAPI(ciudad, pais ) {
    const id = 'adb8240a324c1aac01e0e1f92e4c3400'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`

    //Muestra un spinner de carga
    Spinner();

    // Consultar la API e imprimir el Resultado...
    fetch(url)
       .then(respuesta => respuesta.json())
       .then( datos => {

            limpiarHTML()
            //Verificar si el resultado existe
            if (datos.cod === '404' ){
                mostrarError('Ciudad No Encontrada, revisa tu ciudad')
                return
            }

            //Imprimir el resultado
            mostrarClima(datos)
        })
}

function mostrarClima(datos) {

    //Extraemos datos de una variable extraida
    const {name, main: {temp, temp_max, temp_min}} = datos

    const centigrados = KelvinACentigrados(temp)
    const max = KelvinACentigrados(temp_max)
    const min = KelvinACentigrados(temp_min)

    const nombreCiudad = document.createElement('p')
    nombreCiudad.textContent = `Clima en ${name}`
    nombreCiudad.classList.add('font-bold', 'text-2xl')
    
    const actual = document.createElement('p')
    actual.innerHTML = `${centigrados} &#8451`
    actual.classList.add('font-bold', 'text-6xl')

    const tempMaxima = document.createElement('p')
    tempMaxima.innerHTML = `Max: ${max} &#8451;`
    tempMaxima.classList.add('text-xl')

    const tempMinima = document.createElement('p')
    tempMinima.innerHTML = `Min: ${min} &#8451;`
    tempMinima.classList.add('text-xl')

    const resultadoDiv = document.createElement('div')
    resultadoDiv.classList.add('text-center', 'text-white')
    
    //Insertar en el HTML
    resultadoDiv.appendChild(nombreCiudad)
    resultadoDiv.appendChild(actual)
    resultadoDiv.appendChild(tempMaxima)
    resultadoDiv.appendChild(tempMinima)
    resultado.appendChild(resultadoDiv)
}

const KelvinACentigrados = grados => parseInt(grados - 273.15)

function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function Spinner(){

    limpiarHTML()

    const divSpinner = document.createElement('div')
    divSpinner.classList.add('sk-fading-circle')
    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(divSpinner);

}