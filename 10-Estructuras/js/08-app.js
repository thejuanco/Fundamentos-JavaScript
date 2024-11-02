//Buenas Practicas y Consejos a la hora de utilizar los if 

const autenticado = true 

//No se compara como autenticado === true, ya que se da por hecho que el usuario esta en true desde la const
if(autenticado){
    console.log('El usuario esta autenticado')
}

const puntaje = 500 

function revisarPuntaje(){
    //En lugar de tener varios if anidados, hay que tener un if para cada escenario 
    if (puntaje > 400){
        console.log('Excelente')
        //Return hace que no se ejecute el resto del codigo pero solo funciona dentro de una funcion
        return; 
    }

    if (puntaje > 300){
        console.log('Buen puntaje')
        //Return hace que no se ejecute el resto del codigo
        return; 
    }
}

revisarPuntaje(); 
