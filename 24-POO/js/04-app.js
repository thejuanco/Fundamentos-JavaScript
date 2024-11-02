//Metodos el JS
class Cliente {

    //Volviendo privada la clase
    #nombre

    //El constructor obtiene los valores una vez que el objeto es instaciado
    constructor (nombre, saldo){
        this.#nombre = nombre;
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

const juan = new Cliente('JuancoDB', 200)
console.log(juan.mostrarInformacion())
console.log(juan)