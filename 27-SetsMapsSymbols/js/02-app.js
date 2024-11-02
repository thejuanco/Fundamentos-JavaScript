//WeakSet 

const weakset = new WeakSet()

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = 'Juan'

//? Los weakSet solo aceptan objetos, ningun otro tipo de valor, tiene los mismos metodos que un set normal
// .size no existe en el weakSet, adiferencia del set, tampoco son iterables
weakset.add(cliente)
console.log(cliente)