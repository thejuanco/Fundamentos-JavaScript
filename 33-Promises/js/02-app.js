const paises = []

function nuevoPais(pais, callback){
    paises.push(pais)
    console.log(`Agregando ${pais}`);

    callback() 
}

function mostrarPaises(){
    console.log(paises)
}

function iniciarCallBackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises)

            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises)
            }, 300);
        }, 3000);
    }, 3000);
}

iniciarCallBackHell()