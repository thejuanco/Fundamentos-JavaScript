//En apartado de los Strigs veremos algunos metodos como .length
const producto1 = 'Monitor de 24 Pulgadas'; 

console.log(producto1)
//El metodo length nos permite conocer el numero de caracteres en nuestra cadena de texto
//Es un de los pocos metodos que no requiere parentesis
console.log(producto1.length)

//El metodo indexOf nos permite conocer en que posicion se encuentra la cadena o palabra 
console.log(producto1.indexOf('24'))
//El metodo includes no permite conocer si existe la cadena de texto 
console.log(producto1.includes('Monitor de 24'))
console.log(producto1.includes('Tablet'))
