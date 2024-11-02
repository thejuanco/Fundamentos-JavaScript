//Mostrar los datos de objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio : 300, 
    disponible: true, 
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    } 
}

//Usamos la palabra this para leer las propiedades del objeto 
//this se mantiene en el objeto que fue declarado 
producto.mostrarInfo(); 