//Definiendo las variables y campos del formulario
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#nueva-cita')

const contenedorCitas = document.querySelector('#citas')

let editando; 

// Funciones y UI
eventListeners()
function eventListeners(){
    //Leyendo el formulario con eventos
    mascotaInput.addEventListener('input', datosCita)
    propietarioInput.addEventListener('input', datosCita)
    telefonoInput.addEventListener('input', datosCita)
    fechaInput.addEventListener('input', datosCita)
    horaInput.addEventListener('input', datosCita)
    sintomasInput.addEventListener('input', datosCita)
    formulario.addEventListener('submit', nuevaCita)
}

class Citas{
    constructor() {
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita]
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id)
    }

    editarCita(citaActualizada){
    this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )
    }
}

class UI{
    imprimirAlerta(mensaje, tipo){
        // Creando el mensaje
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12')
        // Agregar clase en base al tipo de error
        if( tipo === 'error' ){
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregando mensaje al HTML
    // ? insert before toma dos parametros, 1. El elemento que queremos insertar y 2. La referencia del elemento en donde queremos insertar
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        // Quitar la alerta 
        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }

    imprimirCitas({citas}){ // Aplicando deconstruccion desde aqui para acceder de manera directa a las propiedades del objeto
        
        //Limpiar el html hijo
        this.limpiarHTML()

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3')
            divCita.dataset.id = id;

            // Scripting 
            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrafo.textContent = mascota

            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder" >Propietario:</span> ${propietario}`

            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder" >Telefono:</span> ${telefono}`

            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML = `<span class="font-weight-bolder" >Fecha:</span> ${fecha}`

            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML = `<span class="font-weight-bolder" >Hora:</span> ${hora}`

            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder" >Sintomas:</span> ${sintomas}`

            // Boton para eliminar la cita
            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`;

            // Añadir la accion de eliminar
            btnEliminar.onclick = () => eliminarCita(id)

            // Boton para editar un cita 
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info')
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>`
            btnEditar.onclick = () => cargarEdicion(cita) // le pasamos la cita porque requerimos todos los datos

            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita)

        })
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas()

// Objeto con la informacion de la cita
// * Para que este metodo funciones debe existir un name definido con las propiedades del objeto en el HTML
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Esta funcion se ejecuta cada que se escriba algo en el formulario
function datosCita(e){
    // Como escribir en el objeto vacio de citaObj
    citaObj[e.target.name] = e.target.value; // [] accede a las propiedades del objeto
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    // Extraer la informaicon del objeto de citas
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj

    // Validar 
    if ( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return
    };

    // Cambiando el modo de edicion
    if(editando){
        // Mensaje de editado correctamente
        ui.imprimirAlerta('Se edito correctamente')

        // Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj})

        //Cambiar el texto del boton 
        formulario.querySelector('button[type=submit]').textContent = 'Crear Cita'

        // Quitar el modo de edicion
        editando = false


    } else {
        //generar un id unico
        citaObj.id = Date.now()

        // Creando una nuevo cita
        administrarCitas.agregarCita({...citaObj}) // le pasamos una copia y no todo el objeto
        // se manda el ultimo valor para que no repita los valores

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agrego correctamente')
    }

    //Reiniciar el objeto
    reiniciarObjeto();

    // reiniciar el formulario
    formulario.reset(); 

    //Mostrar el HTML
    ui.imprimirCitas(administrarCitas)

}

// 
function reiniciarObjeto(){
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
}

function eliminarCita(id){
    // Eliminar las citas
    administrarCitas.eliminarCita(id)

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se elimino correctamente')

    //Refrescar las citas
    ui.imprimirCitas(administrarCitas)
}

//Carga los datos y el modo edicion
function cargarEdicion(cita){
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita

    // Llenar los inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    // Llenando el objeto
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id


    //Cambiar el texto del boton 
    formulario.querySelector('button[type=submit]').textContent = 'Guardar Cambios'

    // Cambiando el modo de edicion
    editando = true
}