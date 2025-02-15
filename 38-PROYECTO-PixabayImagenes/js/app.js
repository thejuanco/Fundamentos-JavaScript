const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginadorDiv = document.querySelector("#paginacion");

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

//Carga la pagina
window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  //Validacion
  if (terminoBusqueda.trim() === "") {
    mostrarAlerta("Ingresa un termino de busqueda");
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".bg-red-100");

  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block">${mensaje}</span>
        `;

    formulario.appendChild(alerta);

    //Eliminar del HTML
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes() {
  const terminoBusqueda = document.querySelector("#termino").value;
  const key = "44694081-2d62318c76921f7c15efaa583";
  const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}$per_page=${registrosPorPagina}&page=${paginaActual}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      totalPaginas = calcularPaginas(datos.totalHits);
      mostrarImagenes(datos.hits);
    });
}

//Generador que va a registrar la cantidad de paginas de elementos de acuerdo a las paginas
function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes) {
  //Limpiando el HTML previo
  while (resultado.firstChild) {
    resultado.remove(resultado.firstChild);
  }

  //Iterar sobre el arreglo de imagenes y construir el html
  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;

    resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
          <div class="bg-white">
            <img class="w-full" src="${previewURL}"/>

            <div class="p-4">
              <p class="font-bold">${likes}<span class="font-light"> Me gusta </span> </p>
              <p class="font-bold">${views}<span class="font-light"> Visualizaciones </span></p>

              <a
                class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase text-center font-bold rounded mt-5 p-1" 
                href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Var imagen
              </a>

            </div>
          </div>
        </div>
      `;
  });
  //Limpiar el paginador previo
  while (paginadorDiv.firstChild) {
    paginadorDiv.removeChild(paginadorDiv.firstChild);
  }

  //Generar el nuevo HTML
  imprimirPaginador();
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    //Caso contrario genera un boton por cada elemento en el generador
    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "mx-auto",
      "mb-1",
      "font-bold",
      "uppercase",
      "rounded"
    );

    //Añandir el evento
    boton.onclick = () => {
      paginaActual = value;
      console.log('Avanzando')
      buscarImagenes()
    };

    paginadorDiv.appendChild(boton);
  }
}
