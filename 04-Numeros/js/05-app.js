const n1 = "20"
const n2 = "20.2"
const n3 = "uno"
const n4 = 20; 

console.log(n1, 'Numero uno ')
//para convertir String a numeros utilizamos number con parseInt
//parseInt convierte los numeros a enteros 
console.log(Number.parseInt(n1))
//parseFloat los convierte a decimales 
console.log( Number.parseFloat(n2))


//Revisar si un numero es entero o no con le metodo isInteger 
console.log(Number.isInteger(n2))
