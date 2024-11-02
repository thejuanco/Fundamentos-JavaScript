//Async storage 

//para agregar elementos al localStorage se ocupa setItem 
localStorage.setItem('nombre', 'Juan') //ocupa una llave y un valor, la llave es como obtienes los valores
//Es valor es lo que puede cambiar

//localStorage solo soporta string 

const producto = {
    producto: 'Monitor de 24 pulgas', 
    precio: 2300
}

//para convertir objetos en string ocupamos JSON.stringify
const productoString = JSON.stringify(producto)
console.log(productoString)

localStorage.setItem('nombre', productoString)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
localStorage.setItem('meses', JSON.stringify(meses))