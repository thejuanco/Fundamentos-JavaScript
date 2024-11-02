//Variables y selectores 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')

//Eventos
evenListeners()
function evenListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    formulario.addEventListener('submit', agregarGasto)
}

//clases 
class Presupuesto {
    constructor(presupuesto){
        //Number convierte un string a numero
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
    //Los gastos inician como un arreglo vacio porque crecen a lo largo del uso
        this.gastos = []
    }

    //Definiendo el nuevo gasto una vez que el usuario lo ingresa
    nuevoGasto(gasto) {
        //Referencia de otros atributos en el mismo metodo y agregan el nuevo gasto al arreglo vacio
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante(){
        //calculando el dinero gastado
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0)

        //Calculando el dinero restante
        this.restante = this.presupuesto - gastado
        console.log(this.restante)
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id)
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto (cantidad) {
        //Extrayendo los valores
        const {presupuesto, restante } = cantidad

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    //le pasamos como parametros el mensaje y el tipo, ya que varios como correcto y error
    imprimirAlerta(mensaje, tipo){
        //Creando el div
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert')

        //Evaluar el tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        //Quitar del HTML
        setTimeout(() => {
            divMensaje.remove()
        }, 3000)
    }

    mostrarGastos(gastos){
        // Llamando la funcion
        this.limpiarHTML()  //Limpiando el html previo
        
        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            // Aplicanco decontrusccion al objeto gasto
            const {nombre, cantidad, id } = gasto

            // Crear un LI
            const nuevoGasto = document.createElement('li')
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
            //Agregar un id dentro del li de nuevoGasto
            nuevoGasto.dataset.id = id

            //Agregar al HTML del gasto 
            nuevoGasto.innerHTML = `
                ${nombre} <span class='badge badge-primary badge-pill'>$ ${cantidad} </span>
            `;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times; '
            // Borrar el html con el boton y el id
            btnBorrar.onclick = () => {
                eliminarGasto(id)
            }
            //Agregando el boton al nuevo gasto
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto); // ApendClinch no borra los registros previos
        })
    }

    limpiarHTML(){
        //Mientras el gasto listado contenga algo
        while(gastoListado.firstChild){
            //Lo elimina del HTML
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
    }

    comprobarPresupuesto(presupuestObj){
        const {presupuesto, restante } = presupuestObj

        //Defiendo el HTML
        const restanteDiv = document.querySelector('.restante')

        // Comprobar el 25% 
        if( (presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger')
        } else // Comprobar el 50 % restante
        if( (presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success')
            restanteDiv.classList.add('alert-warning')
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
            formulario.querySelector('button[type="submit"]').disabled = false
        }

        // Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
            // Evitar que se agregen gasto una vez agotado el presupuesto
            formulario.querySelector('button[type="submit"]').disabled = true
        }
    }
}   

//Instanciar
const ui = new UI();
let presupuesto

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?')
    //Validacion
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || preguntarPresupuesto <= 0){
        //Recargamos la ventana actual
        window.location.reload()
    }

    //presupuesto valido 
    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto)
}

//Esta funcion es para agregar los gastos al html
function agregarGasto (e){
    e.preventDefault()

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value
    const cantidad = Number(document.querySelector('#cantidad').value)

    //Validacion
    if(cantidad === '' || nombre === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
        return
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida ', 'error')
        return
    }

    // Generar un objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()} // Esta sintaxis une cantidad y nombre al objeto gasto, 

    //añadiendo un nuevo gasto
    presupuesto.nuevoGasto(gasto)

    //Mostrando mensaje de exito en el formulario
    ui.imprimirAlerta('Gasto Agregado correctamente')

    // Imprimir los gastos
    const { gastos, restante } = presupuesto // Extrayendo del objeto para no pasar el objeto completo
    ui.mostrarGastos(gastos)

    //Actualizando el restante
    ui.actualizarRestante(restante)

    //Comprobando el presupuesto
    ui.comprobarPresupuesto(presupuesto) // 

    //Reiniciar el formulario
    formulario.reset()
}

function eliminarGasto(id){
    //Elimina gastos del objeto
    presupuesto.eliminarGasto(id)
    
    // Elimina gastos del HTML
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos)

    //Actualizando el restante
    ui.actualizarRestante(restante)

    //Comprobando el presupuesto
    ui.comprobarPresupuesto(presupuesto) // 
}