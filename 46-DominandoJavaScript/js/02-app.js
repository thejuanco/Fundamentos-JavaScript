//Hoisting -> contextos de ejecucion

obtenerClientes('Juan')

function obtenerClientes(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

/*Esta funcion puede marcar un error, porque esta declarada como variable
  y no se define aun, js lo interpreta como si no hubiera nada asociado
*/
const obtenerClientes2 = function(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

obtenerClientes2('Pablo')