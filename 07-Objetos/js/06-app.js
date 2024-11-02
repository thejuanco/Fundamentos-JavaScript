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

const { informacion: { medidas :{marco}}, informacion: {fabricacion: {importado}} }  = precio

console.log(precio)
console.log(marco)
console.log(importado)
