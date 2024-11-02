//Else if 
const dinero = 100; 
const pagar = 500 
let tarjeta = true

if (dinero >= pagar) {
    console.log('Si puedes pagar')
} else if (tarjeta){
    console.log('PUedes pagar porque tienes una tarjeta' )
} else {
    console.log('Fondos insuficientes')
}