//Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]');
const contenedorCitas = document.querySelector('#citas');

//Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)
formulario.addEventListener('submit', submitCita)

//Editar
let editando

//Objeto de cita
const citaObj = {
    //Los valores se agrupan dentro de esta objeto
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

//Creacion de clases

class Notificacion{
    constructor({texto, tipo}){ //Las {}, indican que le estamos pasando un objeto
        this.texto = texto;
        this.tipo = tipo;

        //Llamando el error
        this.mostrar()
    }

    mostrar(){
        //Crear notificacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'my-5', 'uppercase', 'font-bold', 'text-sm', 'p-3', 'text-white', 'rounded-md', 'alert')

        //Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert')
        //Eliminar la alerta con encadenamiento previo
        alertaPrevia?.remove()

        //Si es de tipo error, agrega una clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500')

        //Mensaje de error
        alerta.textContent = this.texto

        //Insertala en el html
        formulario.parentElement.insertBefore(alerta, formulario)
        
        //Quitar la alerta
        setTimeout(() => {
            alerta.remove()
        }, 2000);
    }
}

//Creando la clase de citas
class AdminCitas {
    constructor(){
        this.citas = []
    }

    agregar(cita){
        //Agrega las citas al arreglo de citas
        this.citas = [...this.citas, cita]
        //Mostrar cada que se agrege un paciente
        this.mostrar();
    }

    editar(citaActualizada){
        //Identificando la cita, si estamos editando o se creo
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
        this.mostrar()
    }

    eliminar(id) {
        //Elimando los registros
        this.citas = this.citas.filter(cita => cita.id !== id)
        //Actualizando el codigo HTML
        this.mostrar()
    }

    mostrar(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        //comprobar si hay citas
        if(this.citas.length == 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>'
            return
        }

        //Generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-8' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            //Botones de eliminar y editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            
            //Creando un clone de la cita
            const clone = structuredClone(cita) //crea una copia de un objeto
            
            //Agregando el evento
            btnEditar.onclick = () => {
                cargarEdicion(clone)
            }

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        
            btnEliminar.onclick = () => this.eliminar(cita.id)

            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

            // Agregar al HTML
            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)

            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones)
            contenedorCitas.appendChild(divCita);
        });  
    }
}

//Creando una funcion re-utilizable para escribir los datos dinamicamente
function datosCita(e) {
    //Escribiendo los datos de los inputs en el objeto, de manera dinamica
    citaObj[e.target.name] = e.target.value
}

//Instacionar la clase
const citas = new AdminCitas()

function submitCita(e) {
    //Previniendo la accion por defecto
    e.preventDefault()
    console.log(citaObj)

    //Validando los campos
    if(Object.values(citaObj).some( valor => valor.trim() === '')){ //Includes revisa si algun elemento contiene la condicion
        //Instaciando el error
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }

    //Verificar si estamos editando
    if(editando){
        citas.editar({...citaObj})
        //Mensaje de exito
        new Notificacion({
            texto: 'Paciente editado correctamente',
            tipo: 'exito'
        })
    } else {
        citas.agregar({...citaObj}) //Guardamos una copia para no modificar el paciente anterior
        //Mensaje de exito
        new Notificacion({
            texto: 'Paciente agregado correctamente',
            tipo: 'exito'
        })
       
    }

    //Reiniciando el formulario
    formulario.reset()
    //Reiniciando el objecto de citas
    reiniciarObjectCita()
    //Volviendo el boton a su valor inicial
    formularioInput.value = 'Registrar Paciente'
    //Cambiar el modo de edición
    editando = false
}

function reiniciarObjectCita(){
    //Reiniciando el objeto
    citaObj.id = generarId()
    citaObj.paciente = ''
    citaObj.propietario = ''
    citaObj.email = ''
    citaObj.fecha = ''
    citaObj.sintomas = ''
}

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEdicion(cita){
    Object.assign(citaObj, cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando = true

    //Editnado el boton del formulario segun el modo (editar o crear)
    formularioInput.value = 'Guardar Cambios'
}