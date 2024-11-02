//Modificar texto o imagenes con js 

const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

//Aceder al texto con js 
// console.log(encabezado.innerText) Si en el CSS: esta visibility: hidden, no lo va a encontrar 
// console.log(encabezado.textContent) Si lo detecta 

// console.log(encabezado.innerHTML) Se trae al html 

// const encabezadoDos = 'Nevo Heading'
// document.querySelector('.contenido-hero h1').innerHTML = encabezadoDos;  

//Cambiar img 
const img = document.querySelector('.card img') 
img.src = 'img/hacerDos.jpg'