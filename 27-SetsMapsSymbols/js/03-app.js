//Maps: son listas ordenadas con una llave valor

const cliente = new Map()

cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

console.log(cliente)

//Obtener los datos
console.log(cliente.get('nombre') + ' ' + cliente.get('tipo') + ' ' + cliente.get('saldo') )

//Tamaño
console.log(cliente.size)

//Comprobar si tiene un elemento
console.log(cliente.has('nombre'))

//Eliminar el map
//console.log(cliente.delete('saldo') )

// También se puede inicializar un map con diferentes valores...
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

//Reescribir valores
paciente.set('nombre', 'Antonio');
// paciente.set('cuarto', 400);

console.log(paciente);

// Foreach a un map
cliente.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});

