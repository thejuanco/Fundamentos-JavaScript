//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos'); 
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = []; //Es un arreglo vacio ya que se añaden las variables 

cargarEventListener(); 

//Funcion para registrar todo los event listener 
function cargarEventListener(){
    //Cuando agregas un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso)

    //Elimina cursos del carrito 
    carrito.addEventListener('click', eliminarCurso) 

    //Vaciar el carrito 
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; //reiniciando el arreglo 

        limpiarCarrito(); //Eliminar el HTML 
    })
}

function agregarCurso(e){
    e.preventDefault()
    //Evitando que se disparen otros eventos 
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerCursoSeleccionado(cursoSeleccionado); 
    }
}

function eliminarCurso (e){
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito por ei id 
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        carritoHTML(); //Iterar sobre el carrito y mostrar su html 
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso. 
function leerCursoSeleccionado(curso){
    // console.log(curso)

    //Crear un objeto con el contenido del curso 
    const infoCurso = { 
        imagen: curso.querySelector('img').src , 
        titulo: curso.querySelector('h4').textContent, //textContent nos ayuda a extraer el texto 
        precio: curso.querySelector('.precio span').textContent, 
        id: curso.querySelector('a').getAttribute('data-id'), //Obtener el id del curso 
        cantidad: 1 
    }

    //Verifica si un elemento ya existe en el carrito 
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
        if(existe){
            //Actualizar la cantidad 
            const cursos = articulosCarrito.map( curso => {
                if(curso.id === infoCurso.id){
                    curso.cantidad++; 
                    return curso //retorna el objeto actualizado 
                } else {
                    return curso; //retorna los objetos que no son los duplicados 
                }
            })
            articulosCarrito = [...cursos]
        } else {
            //Agrega elementos al carrito 
            articulosCarrito = [...articulosCarrito, infoCurso];
        }

    console.log(articulosCarrito);

    carritoHTML(); 
}

//Muestra el carrito de compras en el HTML 
function carritoHTML (){
    //Limpiar el HTML
    limpiarCarrito(); 

    //Recorre el carrito y genera HTML 

    articulosCarrito.forEach ((curso) => {
        const {imagen, titulo, precio, id, cantidad} = curso
        const row = document.createElement('tr'); 
        // El horden de los elementos td, es importante, va de acuerdo a la table padre
        row.innerHTML = `
            <td>
                <img src='${imagen}' width='100'>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href='#' class='borrar-curso' data-id='${id}'> X </a></td>
        `; 
    //Agregar el HTML del carrito al body 
    contenedorCarrito.appendChild(row); 

    
    })
}

function limpiarCarrito(){
    //Forma Lenta 
    contenedorCarrito.innerHTML= ''; //Limpia el html del carrito al body

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}