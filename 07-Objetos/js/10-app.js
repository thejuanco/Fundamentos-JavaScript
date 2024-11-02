//Uniendo dos objetos 

const producto = {
    nombre: 'Juan',
    precion : 300, 
    disponible: true 
}

const medidas = {
    peso: '1kg', 
    medida: '1m'
}

//Uniendo dos metodos 
const resultado = Object.assign(producto, medidas)
console.log(resultado)


//Spreado operator 

const resultado2 = {...producto, ...medidas}
//Los 3 puntos indican que se esta copiando el objeto 
console.log(resultado2)