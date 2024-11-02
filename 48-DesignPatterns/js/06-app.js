//Accediendo a las variables del capitulo anterior
// console.log(modulo1.nombre)
// modulo1.hola()

//? Mixin Pattern: agregar funciones a una clase una vez que ha sido creada

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi Nombre: ${this.nombre}`);
    }
}

//Añadir funcionesPersona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona)

const cliente = new Persona('Juan', 'correo@correo.com')
console.log(cliente)
cliente.mostrarInformacion()
cliente.mostrarNombre()

const cliente2 = new Cliente('Cliente', 'cliente@cliente.com')
console.log(cliente2)
cliente2.mostrarInformacion()
cliente2.mostrarNombre()