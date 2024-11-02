//Heredar un prototype
//los prototypes van en mayusculas
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//? El funcion busca de manera local y el arrow funcion busca de manera global

//accediendo al prototype
Cliente.prototype.tipoCliente = function() {
    let tipo; 
    if(this.saldo > 1000 ){
        tipo = 'Gold'
    } else if(this.saldo > 5000) {
        tipo = 'platino'
    } else {
        tipo = 'normal';
    }
    return tipo
}

Cliente.prototype.nombreClienteSaldo = function() {
    //Sepuede hacer referencias a objetos o a otros prototypes
    return `Nombre ${this.nombre}, saldo ${this.saldo}, tipo Cliente ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

//Como persona y cliente herendan parametros similares podriamos heredarlos

function Persona(nombre,saldo, telefono){
    Cliente.call(this, nombre, saldo) //Heredamos con call - llamar
    this.telefono = telefono
}

//heredar las funciones es antes de heredar una instancia
Persona.prototype = Object.create(Cliente.prototype) //Le pasamos el prototype de cliente
//Object.create se diseño para heredar el prototype

Persona.prototype.constructor = Cliente;

const Juan = new Persona('Sam', 400, 12345)
console.log(Juan)
console.log(Juan.nombreClienteSaldo())

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(Juan.mostrarTelefono())
