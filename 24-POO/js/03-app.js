//Hrencia
class Cliente {
    //El constructor obtiene los valores una vez que el objeto es instaciado
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

//* Herencia en JS
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo)
        this.telefono = telefono;
        this.categoria = categoria;
    }

    //cuando dos metodos se llaman igual se reescribe el objeto
    //solo basta con nombrarlos de la misma forma
    static bienvenida(){ //Reescribir un metodo
        return `Bienvenido al cajero de empresas`
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Meztli', 400, 890, 'Libre')
console.log(empresa)

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())