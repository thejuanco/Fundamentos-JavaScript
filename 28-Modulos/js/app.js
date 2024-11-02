import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacin, tienesSaldo, Cliente } from "./cliente.js";
//Importar empresa
import { Empresa } from "./empresa.js"

console.log(nombreCliente, ahorro);

console.log(mostrarInformacin(nombreCliente, ahorro))

tienesSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente)
console.log(cliente.mostrarInformacion())


const empresa = new Empresa('Meztli', 200, 'Software Developer')
console.log(empresa)
console.log(empresa.mostrarInformacion())

nuevaFuncion()