//constructores 
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
    //Evaluar las variables
    let cantidad
    const base = 2000

   //Evaluando las condiciones
   switch (this.marca) {

        case '1':
            cantidad = base * 1.15
            break
        case '2':
            cantidad = base * 1.05
            break
        case '3':
            cantidad = base * 1.35
            break
    
        default:
            break;
   }
   //Leer el año
   const diferencia = new Date().getFullYear() - this.year

   //cada año que la diferencia es mayor el costo va a reducirse un 3% del valor del seguro
   cantidad -= ((diferencia * 3) * cantidad ) / 100 

   /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es completo se multiplica por un 50% mas
   */

    if(this.tipo === 'basico'){
        cantidad *= 1.30
    } else {
        cantidad *= 1.50
    }

    return cantidad

}

function UI(){}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
          min = max - 20

    //Seleccionamos el año
    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option')
        option.value = i
        option.textContent = i
        selectYear.appendChild(option)
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    
    const div = document.createElement('div')
    
    if(tipo === 'error'){
        div.classList.add('error')
    } else {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje

    //Insertar en el html
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.insertBefore(div, document.querySelector('#resultado'))

    //Limpiando la alerta del formulario
    setTimeout(() => {
        div.remove()
    }, 3000);
}

UI.prototype.mostrarResultado = (seguro, total) => {
    const {marca, year, tipo} = seguro
    let textoMarca
    //Evaluando la marca del seguro
    switch (marca) {
        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break
        case '3':
            textoMarca = 'Europeo'
        default:
            break;
    }

    //Creando el resultado
    const div = document.createElement('div')
    div.classList.add('mt-10')
    // textContent = cuadno no queremos html solo texto
    //innerHTML = cuando queremos agregar html
    div.innerHTML = `
        <p class='header'>Tu resumen</p>
        <p class='font-bold'>Marca: <span class='font-normal'>${textoMarca}</span></p>
        <p class='font-bold'>Año: <span class='font-normal'> ${year}</span></p>
        <p class='font-bold'>Tipo: <span class='font-normal'> ${tipo}</span></p>
        <p class='font-bold'>Total: <span class='font-normal'>$ ${total}</span></p>
    `

    const resultadoDiv = document.querySelector('#resultado')

    //mostrar el spiner 
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'
    //Eliminar el spinner
    setTimeout(() => {
        spinner.style.display = 'none' //Se borra el spiner y se muestra el resultado
        resultadoDiv.appendChild(div)
    }, /*Duracio*/ 3000)
}

//Instaciar UI 
const ui = new UI();


document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones() //LLena el select con los años 
})

eventListeners()
function eventListeners () {
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener("submit", cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault()
    
    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value
    
    //Leer el año seleccionado 
    const year = document.querySelector('#year').value

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    
    //validando el formulario
    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return
    }

    ui.mostrarMensaje('Cotizando...', 'exito')

    //Ocultar las cotizaciones previas
    const resultados  = document.querySelector('#resultado div')
    if(resultados != null){
        resultados.remove()
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo)
    const total = seguro.cotizarSeguro()

    //Utilizar el prototype que va a utilizar
    ui.mostrarResultado(seguro, total)
}