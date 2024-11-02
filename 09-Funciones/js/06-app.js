//parametros por default en funciones 
function saludar(nombre = 'Desconocido', apellido = 'no tiene apellido'){
    console.log(`Hola ${nombre} bienvenido y su ${apellido}`)
}

saludar('Juan', 'cruz')
saludar('Sam'); 
saludar(); 