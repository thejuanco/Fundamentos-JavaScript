//Variables 
const year = document.querySelector('#year')
const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedor para los resultados
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear() //getFullYear nos da el año actual 
const min = max - 10

//Generar un objeto con la busqueda
const datosBusqueda ={
    //Los parametros por los cuales vamos a buscar
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos 
document.addEventListener('DOMContentLoaded', function(){

    mostrarAutos(autos); //Muestra los autos al cargar 

    //Llena las opciones de select 
    llenarSelect(); 
})

//Eventlistener para los formularios de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value) //convertimos a un numero desde aqui por la fecha
    filtrarAuto(); 
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto(); 
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
});

puertas.addEventListener('change', e=> {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})

transmision.addEventListener('change', e=> {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
})

//Funciones 
function mostrarAutos(autos) {

    limpiarHTML() //Eliminar el html previo
    autos.forEach(auto => {

        const autoHTML = document.createElement('p')
        const {marca, modelo, year, precio, puertas, color, transmision} = auto

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmicion: ${transmision} - Color: ${color} - Precio: $${precio} 
        `

        //Insertar en el HTML 
        resultado.appendChild(autoHTML)
    }) 
}

//Limpiar html 
function limpiarHTML(){
    while(resultado.firstChild){ //mientrar haya algo en el resultado
        //va a limpiar 
        resultado.removeChild(resultado.firstChild)
    }
}

//Genera los años del select 
function llenarSelect(){

    for (let i = max; i >= min; i--){
        //Creando las opciones 
        const opcion = document.createElement("option")
        opcion.value = i //Asignando el valor 
        opcion.textContent = i; //Asignando el texto
        year.appendChild(opcion) 
    }
}

//funcion que filtra en base a la busqueda 
function filtrarAuto(){
    const resultado = autos.filter( filtarMarcar ).filter(filtrarYear).filter(filtarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor) //funciones de alto nivel ya que invocan a otras funciones
    //console.log(resultado)

    //cambiar el html 
    //mostrarAutos(resultado);

    if( resultado.length ){
        mostrarAutos(resultado)
    } else {
        noResultado()
    }

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No exite un auto con las caracteristicas proporcionadas'
    document.querySelector('#resultado').appendChild(noResultado);
}

}

function filtarMarcar(auto){
    const {marca} = datosBusqueda
    if(marca){
        return auto.marca === marca
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
        return auto.year === year
    }
    return auto;
}

function filtarMinimo(auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    if(puertas){
        return auto.puertas === puertas
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda
    if(transmision){
        return auto.transmision === transmision
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda
    if(color){
        return auto.color === color
    }
    return auto;
}