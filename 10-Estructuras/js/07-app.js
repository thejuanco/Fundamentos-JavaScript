//Operador OR, solo se cumple una condicion 

const efectivo = 300 
const credito = 1000 
const disponible = efectivo + credito
const totalPagar = 600 

if(efectivo > totalPagar || credito > totalPagar){
    console.log('Puedes pagar')
} else {
    console.log('Fondos insuficientes')
}