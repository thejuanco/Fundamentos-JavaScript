//New binding
function Auto(modelo, color){
    this.modelo = modelo; //this es el nuevo binding
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto)

//Window binding

window.color = 'Negro'; //Declaramos la variable global color

function hola(){
    console.log(color); //color se refiere al valor de la variable global
}

hola(); //Con this.color, se referencia al valor de la variable local en la función hola