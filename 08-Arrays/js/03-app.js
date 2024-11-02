//Recorrer un arreglo 

const meses = ['enero', 'febrero', 'marzo','abril', 'mayo', 'junio']

console.table(meses)

//1. Debemos conocer cuanto mide el arreglo 
console.log(meses.length)

//2. Para recorrer debemos utilizar un iterador
for(let i=0; i < meses.length; i++ ){
    console.log(meses[i])
}