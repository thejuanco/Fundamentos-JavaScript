//Funciones puras
//son funciones que retornan un dato pero no modifican el valor de las variables
//el resultado es una variable con el nuevo valor

//Si toma un solo valor debe de retornar un solo valor
const duplicar = numero => numero*2

const numero1 = 20
//Se mantiene el valor original del numero
const resultado = duplicar(numero1)
console.log(resultado)