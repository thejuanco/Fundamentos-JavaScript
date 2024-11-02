const suma = (a, b, c) => {
    return a + b + c;
}
console.log(suma(1, 2, 3))

//currying consiste en dividir la funcion de manera parcial
const parcial = (a) => (b, c) => suma(a, b, c)

const primerNumero = parcial(5)
const resultado = primerNumero(4, 3)
console.log(resultado)

// también se puede hacer de esta manera
const parcial2 = a => b => c => suma(a, b, c)
const primerNumero2 = parcial2(5)
const segundoNumero = parcial2(4)
const resultado2 = segundoNumero(6)
console.log(resultado2)

const resultado3 = parcial2(2)(3)(4) //*: se aplica currying y parciales, pregunta para trabajo
console.log(resultado3)
