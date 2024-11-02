//Singlenton
//Siempre retorna el objeto instanciado

let instancia = null

//Este patron no permite que se creen mas instancias
class Persona {
    constructor(nombre, email) {
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else return instancia
        //Si ya hay una instancia, retorna esa instancia
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Karen', 'karen@karen.com');
console.log(persona2);