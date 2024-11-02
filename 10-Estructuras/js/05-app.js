//Switch case 

const metododePago = 'cheque'

//Revisa que tenga el valor de la variable
switch (metododePago){
    //En caso de que sea efectivo 
    case 'efectivo':
        //Ejecuta esta linea
        console.log(`Pagaste con ${metododePago}`)
        //Para terminar la ejecucion se utiliza break 
        break; 
    case 'tarjeta': 
        console.log('Pagaste con tarjeta')
        break; 
    //El default es obligatorio porque si ninguna condición se cumple se ejecuta: 
    default: 
        console.log('No has seleccionado el metodo de pago')
        break; 
}