//Iteradores en JS
const ciudades = ['Londres', 'Paris', 'Madrid', 'New York']
const ordenes = new Set([123, 231, 131, 102])
const datos = new Map()

datos.set('nombre', 'Juan')
datos.set('Profesion', 'Desarrollador ')

//Iterador Entries
for(let entry of ciudades.entries()){ //entries retorna llave-valor, en caso de no existir la crea 
    console.log(entry)
}

for(let entry of ordenes.entries()){ //entries retorna llave-valor
    console.log(entry)
}

for(let entry of datos.entries()){ //entries retorna llave-valor, en caso de no existir la crea 
    console.log(entry)
}

//Iterador Values
for(let value of ciudades.values()){ //values retorna solo el valor
    console.log(value)
}

for(let value of ordenes.values()){ //values retorna solo el valor
    console.log(value)
}

for(let value of datos.values()){ //values retorna solo el valor
    console.log(value)
}

//Iterador Keys
for(let keys of ciudades.keys()){ //keys retornar las llaves de un arreglo, o las posiciones, sino las genera
    console.log(keys)
}

for(let keys of ordenes.keys()){ //keys retornar las llaves de un arreglo, o las posiciones, sino las genera
    console.log(keys)
}

for(let keys of datos.keys()){ //keys retornar las llaves de un arreglo, o las posiciones, sino las genera
    console.log(keys)
}

//Iterador por defecto
// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for( let orden of ordenes){
    console.log(orden);
}

for( let dato of datos){
    console.log(dato);
}