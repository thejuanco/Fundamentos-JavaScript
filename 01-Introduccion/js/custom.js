//En este archivo contiene los archivos de JavaScritp 
// const nombre = prompt('cual es tu nombre, perra')
//la funcion de innerHTML sirve para 
//En este documento estamos utilizando la clase container en el div 
// document.querySelector('.contenido').innerHTML = `<span>El usuario: ${nombre}, esta aprendiendo JavaScript</span>`

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  
  Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  };
  
  const persona1 = new Persona('Juan', 'Pérez');
  const persona2 = new Persona('María', 'Gómez');
  
  persona1.saludar(); // Hola, mi nombre es Juan Pérez
  persona2.saludar(); // Hola, mi nombre es María Gómez
  
  console.log(persona1.__proto__ === Persona.prototype); // true
  console.log(Persona.prototype.__proto__ === Object.prototype); // true
  
  //Creando una funcion padre
  function Elemento(nombre, tipo, durabilidad){
    this.nombre = nombre, this.tipo = tipo, this.durabilidad = durabilidad
  }
  
  const elementoUno = new Elemento('Oro', 'Metal', 300)
  console.log(elementoUno)
  
  Elemento.prototype.Comprar = function(){
    return `El elemento ${this.nombre} se puede comprar`
  }
  
  elementoUno.Comprar(); //Heredando los elementos
  
  function ElementoNoMetalico(nombre, tipo, durabilidad, forma){
    Elemento.call(this, nombre, tipo, durabilidad) //Herendando el prototype 
    this.forma = forma
  }
  
  const nuevoElemento = new ElementoNoMetalico('Oxigeno', 'Gas', 'Desconocida', 'Gas')
  
  ElementoNoMetalico.prototype.Precio = function(){
    return `El precio del elemento: ${this.nombre} puede variar debido a la forma del: ${this.forma}`
  }
  nuevoElemento.Precio(); //Llamando el prototype
  console.log(nuevoElemento)
  
  
  function Combinada(nombre, apellido, forma, tipo, durabilidad, descripcion){
    Persona.call(this, nombre, apellido)
    ElementoNoMetalico.call(this, forma)
    Elemento.call(this, tipo, durabilidad)
    this.descripcion = descripcion
  }
  
  const nuevoSuperElemento = new Combinada('Juan', 'Cruz', 'Superheroe', 'Humano', 'Extremadamente alta', 'Es un superHUMANO')
  console.log(nuevoSuperElemento)