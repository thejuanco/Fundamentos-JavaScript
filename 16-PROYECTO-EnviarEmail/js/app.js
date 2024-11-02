document.addEventListener('DOMContentLoaded', function(){ //Se ejecuta una vez que todo el contenido ha cargado 

    const email = {
        email: '', 
        asunto: '', 
        mensaje: '', 
    }

    //seleccionar los elementos de la interfaz 
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto'); 
    const inputMensaje = document.querySelector('#mensaje'); 
    const formulario = document.querySelector('#formulario'); 
    const btnSubmit = document.querySelector('#formulario button[type="submit"]'); //mescla para seleccionar el submit 
    const btnReset = document.querySelector('#formulario button[type="reset"]'); 
    const spinner = document.querySelector('#spinner');

    //Asignar eventos 
    inputEmail.addEventListener('input', validar) //? function(e){ El blur se ejecuta cuando avandonamos un campo 
        //?e es un parametro que se pasa en automatico esta presente en el addEventListener, se puede renombrar como queramos

    inputMensaje.addEventListener('input', validar) //sin parentesis para se ejecute cuando ocurre el evento 

    inputAsunto.addEventListener('input', validar)

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click', function(e){
        e.preventDefault(); 

        resetRormulario()
    })

    function enviarEmail(e){
        e.preventDefault(); 

        spinner.classList.add('flex')
        spinner.classList.remove('hidden'); 

        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden'); 

            resetRormulario(); 

            //Crear una alerta 
            const alertaExito = document.createElement('p')
            alertaExito.classList.add('bg-green-500', 'text-white', 'text-center', 'rounded-lg', 'p-2' ,'mt-10', 'font-bold', 'text-sm', 'uppercase')
            alertaExito.textContent= 'Mensaje Enviado correctamente'

            formulario.appendChild(alertaExito)

            setTimeout(() => {
                alertaExito.remove(); 
            }, 3000)

        }, 3000)
    }

    function validar(e){
        if (e.target.value.trim() == '') {
        //parentElement para recorrer al elemento padre 
        //nextElementSibling para recorrer al siguiente elemento 
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); //e.target.parentElement agrega la alerta debajo del elemento    
            email[e.target.name] = '';  //Reiniciamos el campo cuando esta vacio 
            comprobarEmail(); 
            return; 
        }
    
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = ''; 
            comprobarEmail(); 
            return 
        }

        limpiarAlerta(e.target.parentElement)

        //asignar los valores
        email[e.target.name] = e.target.value.trim();

        //comprobar email 
        comprobarEmail()
    }

    function mostrarAlerta (mensaje, referencia){
        //Compruba y ya existe una alerta 
        limpiarAlerta(referencia) 

        // const alerta = referencia.querySelector('.bg-red-600')
        // if (alerta) {
        //     alerta.remove(); //remueve la alerta existente pero genera una nueva 
        // } Como el codigo es el mismo que la funcion limpiar alerta eliminamos este codigo y llamanos a la funcion con el parametro

        //Generar el elemento en HTML 
        const error = document.createElement('p')
        //Obtener el texto con textContent 
        error.textContent = mensaje; 
        //Agregando clases al parrafo 
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'rounded-md', 'text-center')

        //Inyectar el error al formulario 
        //appendChiil agrega un elemento a los ya existe , en este caso lo agrega hasta el final 
        //el parametro referencia agrega la alerta debajo del input
        referencia.appendChild(error); 


        //console.log(error)
    }

    function limpiarAlerta(referencia){
        //Limpia la alerta existente 
        const alerta = referencia.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove(); //remueve la alerta existente pero genera una nueva 
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  //expresion regular 
        //Es un codigo que busca un patron en una cadenas de texto 
        const resultado = regex.test(email) //const test comparamos que queremos validar 
        return resultado
    }

    function comprobarEmail(){
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true ; 
            return; 
        } 
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false ;
    }

    function resetRormulario(){
         //reiniciar el objeto 
         email.mensaje = ''
         email.asunto = ''
         email.email = ''
 
         formulario.reset()
         comprobarEmail(); 
    }
})