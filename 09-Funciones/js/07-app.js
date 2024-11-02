//Como se comunican las funciones 
iniciarApp()

function iniciarApp(){
    console.log('iniciando la app...')
    segundaFuncion(); 
}

function segundaFuncion(){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Juan')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando el usuario... espere...')
    console.log(`Usuario Autenticado exitosamente: ${usuario}`)
}