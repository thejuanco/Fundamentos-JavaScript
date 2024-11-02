//Constructor Patern
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//Hereda las clases a las hijas

class Cliente extends Persona {
    constructor(nombre, email, empresa){
        //Hereda las clases de la clase padre
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Google');
console.log(cliente)