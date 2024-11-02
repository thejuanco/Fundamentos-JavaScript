//Object literal 
const precio = {
    nombre: 'Juan',
    precion : 300, 
    disponible: true, 
    informacion: {
        medidas: {
            peso: '1kg', 
            marco: 'Sony'
        }, 
        fabricacion : {
            origen: 'China', 
            importado: true
        }
    } 
}

console.log(precio)
console.log(precio.informacion)
console.log(precio.informacion.fabricacion.importado)
