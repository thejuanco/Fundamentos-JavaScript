const producto = 'Monitor de 24 Pulgadas '; 
const precio = '30 USD'

//EL primer metodo es concat que nos permite unir dos Strings 
// console.log(producto.concat(precio))
// console.log(producto.concat('para gamers por gamers'))

console.log('El producto ' + producto + ' es muy caro'); 
console.log('El producto ' , producto , ' es muy caro'); 

//Template Strings 
console.log(`El producto ${producto} tiene un precio de ${precio}`)