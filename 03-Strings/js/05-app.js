//Reemplazar el texto de una cadena 
const producto = 'Monitor de 14 pulgadas '

//Utilizamos el metodo replace() para reemplazar el Strign 
//Lleva dos parametros 
console.log(producto)
console.log(producto.replace('pulgadas', '"'))

//Metodo .slice para cortar, requiere posicion de inicio y del final 
console.log(producto.slice(0, 10))

//Metodo subString es una alternativa a .slice 
console.log(producto.substring(0, 10))

/*La diferencia entre slice y subString es que slice si le pasas un numero mayor de inicio no 
hace nada y subString identifica el numero mayor y lo corta*/

//Metodo charAt corta una letra en la pocision indicada 
const nombre = 'Juan'
console.log(nombre.charAt(0))
