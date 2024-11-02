//.concat 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses3 = ['Octubre', 'Novembre', 'Diciembre']
const meses2 = ['Agosto', 'Septiembre']

const resultado = meses.concat(meses2)

console.log(resultado)

const resultado2 = [...meses, ...meses2, ...meses3]
console.log(resultado2)

//Se unen conforme se van declarando 
