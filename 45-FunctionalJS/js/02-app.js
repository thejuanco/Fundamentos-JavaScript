//Funciones como argumentos
const suma = (a, b) => a + b;
const mult = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(10, 20 )

//Pasamos la funcion como un argumento
console.log(sumarOMultiplicar( suma )) // 30
console.log(sumarOMultiplicar( mult )) // 200