//Clases en js
//forma mas popular
class Cliente {
    //El constructor obtiene los valores una vez que el objeto es instanciado
    constructor (nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente : ${this.nombre}, tus saldo es de ${this.saldo}`
    }

    //propiedades estaticas
    static bienvenida(){
        return `Bienvenido al cajero`
    //Las propiedades estaticas no requieren una instancia
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan)
//Mostrando la informacion
console.log(juan.mostrarInformacion())
console.log(Cliente.bienvenida())

const ClienteDos = class{
    constructor (nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new ClienteDos('Juanco', 440);
console.log(juan2)