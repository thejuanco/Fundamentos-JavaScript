//funciones que retornar una funcion
const obtenerClientes = () => () => console.log('Juanco')

//Se asigna la funcion y se manda a llamar la nueva funcion
const fn = obtenerClientes()
fn()