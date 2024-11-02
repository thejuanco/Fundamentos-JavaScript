//Funciones que retornan un valor 
function sumar(a, b){
    return a + b; 
}

const resultado = sumar( 30, 10)

console.log(resultado)


let total = 0; 

function agregarCarrito (precio){
    return total += precio 
}

function calcularImpuesto(total){
    return total * 1.1  
}

total = agregarCarrito(100)
total = agregarCarrito(290)

const totalaPagar = calcularImpuesto(total); 

console.log(total, 'sin impuesto')
console.log(`El  total a pagar es ${totalaPagar}`)

