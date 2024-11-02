
//Funcion IIFE, se ejecuta despues de ser definida
(function(){
    //Evita el alcance global innecesario
    console.log('Desde un IIFE')

    const nombreClienteUno = 'Juan'

    //Se puede asignar a la ventana global
    window.nombreDos = 'Pablo'
})() //Puede llegar a aceptar argumentos

//Exportar la variable
export const nombreCliente = 'Juan'
export const ahorro = 200

//Exportar funciones
export function mostrarInformacin(cliente, ahorro){
    return `${cliente}, este es su ahorro: $ ${ahorro}`
}

export function tienesSaldo(ahorro){
    ahorro > 0 ? console.log('Si tiene saldo') : console.log('No tiene nada el jodido')
}

//Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre
        this.saldo = ahorro
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.saldo}`
    }
}

export default function nuevaFuncion (){
    return console.log('Este es el export default')
}

//? Solo puede existir un export default, tambien puede existir sin un nombre