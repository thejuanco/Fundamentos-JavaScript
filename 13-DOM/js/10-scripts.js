//Generar html desde js 
const enlace = document.createElement('a');

//Agregando el enlace 
enlace.textContent = 'Enlace Nuevo'

//añadiendo el href 
enlace.href = '/enlace-nuevo'; 

//Agregando el target para abrir el enlace en una nueva pestaña 
enlace.target = '_blank';
//Añadir el enlace al nav 
const navegacion = document.querySelector('.navegacion')
//appendChild envia el elemento hasta el final 
//navegacion.appendChild(enlace)
//Para tener mas control utilizamos before 
navegacion.insertBefore(enlace, navegacion.firstChild);

//Añadir clases 
enlace.classList.add('nuevaClase'); 

console.log(enlace); 

//? Crear un card de forma dinamica 
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona'
parrafo3.classList.add('precio')

//Crear div con la clase de info
const info = document.createElement('div')
info.classList.add('info'); 
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//Crear la imagen 
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

//Crear el card 
const card = document.createElement('div');
card.classList.add('card')

//Asignar la imagen 
card.appendChild(imagen)

//asignar info 
card.appendChild(info)

//Insertar en el html 
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.insertBefore(card, contenedor.children[0])