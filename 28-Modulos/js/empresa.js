import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
    constructor (nombre, ahorro, categoria){
        //Heredando las clases de Cliente
        super(nombre, ahorro)
            this.categoria = categoria
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.saldo}, categoria: ${this.categoria}`
    }
}