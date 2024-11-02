//Creando un prototype
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
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'platino';
    } else {
        tipo = 'normal';
    }
    return tipo
}

Cliente.prototype.nombreClienteSaldo = function() {
    //Se puede hacer referencias a objetos o a otros prototypes
    return `Nombre ${this.nombre}, saldo ${this.saldo}, tipo Cliente ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

//Instannciarlo
const juan = new Cliente('Juan', 200)

//utilizar el proto
console.log(juan.tipoCliente())
console.log(juan.nombreClienteSaldo())
juan.retiraSaldo(100)
console.log(juan.nombreClienteSaldo())

console.log(juan)
