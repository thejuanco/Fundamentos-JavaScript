function iniciarApp() {

  const selectCategorias = document.querySelector('#categorias');
  const resultado = document.querySelector('#resultado');

  if(selectCategorias){
    selectCategorias.addEventListener('change', seleccionarCategoria)
    //Listar las categorias
    obtenerCategorias();
  }

  //Listar los favoritos
  const favoritosDiv = document.querySelector('.favoritos');
  if(favoritosDiv) {
    obtenerFavoritos();
  }

  //Construir el modal 
  const modal = new bootstrap.Modal('#modal', {})

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    //Llamado hacia hacia la url
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resultado) => {
        mostrarCategorias(resultado.categories);
      });
  }

  function mostrarCategorias(categorias = []) {
    //Asignandole un parametro por defecto
    categorias.forEach((categoria) => {
      const option = document.createElement("option");
      option.value = categoria.strCategory;
      option.textContent = categoria.strCategory;
      selectCategorias.appendChild(option);
    });
  }

  function seleccionarCategoria(e) {
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarRecetas(resultado.meals));
  }

  function mostrarRecetas(recetas = []) {
    limpiarHTML(resultado);

    const heading = document.createElement('h2')
    heading.classList.add('text-center', 'text-black','my-5')
    heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados'
    resultado.appendChild(heading)

    //Iterar en los resultados
    recetas.forEach(receta => {
      const { idMeal, strMeal, strMealThumb} = receta
 
      const recetasContenedor = document.createElement('div')
      recetasContenedor.classList.add('col-md-4')

      const recetaCard = document.createElement('div')
      recetaCard.classList.add('card','mb-4')

      const recetaImagen = document.createElement('img')
      recetaImagen.classList.add('card-img-top')
      recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.title}`
      recetaImagen.src = strMealThumb ?? receta.img

      const recetaCardBody = document.createElement('div')
      recetaCardBody.classList.add('card-body')

      const recetaHeading = document.createElement('h3')
      recetaHeading.classList.add('card-title','mb-3')
      recetaHeading.textContent = strMeal ?? receta.title

      const recetaButton = document.createElement('button')
      recetaButton.classList.add('btn','btn-danger','w-100')
      recetaButton.textContent = 'Ver receta'
      // recetaButton.dataset.bsTarget = "#modal"
      // recetaButton.dataset.bsToggle = "modal"
      recetaButton.onclick = () => {
        seleccionarReceta(idMeal ?? receta.id);
      }

      
      //Inyectar en el codigo HTML
      recetaCardBody.appendChild(recetaHeading)
      recetaCardBody.appendChild(recetaButton)
      recetaCard.appendChild(recetaImagen)
      recetaCard.appendChild(recetaCardBody)
      recetasContenedor.appendChild(recetaCard)

      resultado.appendChild(recetasContenedor)

    })
  }

  function seleccionarReceta(id){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => mostrarRecetaModal(resultado.meals[0]))
  }

  function mostrarRecetaModal(receta) {
    const {idMeal, strInstructions, strMeal, strMealThumb} = receta
    console.log(receta)

    //Añadir contenido al modal
    const modalTitle = document.querySelector('.modal .modal-title')
    const modalBody = document.querySelector('.modal .modal-body')

    modalTitle.textContent = strMeal
    modalBody.innerHTML = `
      <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredientes y Cantidades </h3>
    `;

    const listGroup = document.createElement('ul')
    listGroup.classList.add('list-group')

    //Mostrar ingredientes
    for(let i = 1; i <= 20; i++){
      //Revisar si hay algo
      if(receta[`strIngredient${i}`]){
        const ingrediente = receta[`strIngredient${i}`]
        const cantidad = receta[`strMeasure${i}`]

        const ingredienteLi = document.createElement('li')
        ingredienteLi.classList.add('list-group-item')
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`

        listGroup.appendChild(ingredienteLi)
      }
    }

    //Agregar al HTML
    modalBody.appendChild(listGroup)

    const modalFooter = document.querySelector('.modal-footer')
    limpiarHTML(modalFooter)

    //Botones de cerrar y favorito
    const btnFavorito = document.createElement('button')
    btnFavorito.classList.add('btn', 'btn-danger', 'col')
    btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito'

    btnFavorito.onclick = () => {
      //Validar si existe el favorito
      if(existeStorage(idMeal)){
        eliminarFavorito(idMeal)
        btnFavorito.textContent = "Guardar Favorito"
        mostrarToast('Eliminado correctamente')
        return
      }

      //Guardar en el localstorage
      agregarFavorito({
        id: idMeal,
        title: strMeal,
        img: strMealThumb
      }) //Crear el objeto desde la funcion

      btnFavorito.textContent = "Eliminar Favorito"
      mostrarToast('Agregado correctamente')
    }

    const btnCerrar = document.createElement('button')
    btnCerrar.classList.add('btn', 'btn-secondary', 'col')
    btnCerrar.textContent = 'Cerrar'
    btnCerrar.onclick = () => {
      modal.hide(); //Ocultar el modal
    }

    modalFooter.appendChild(btnFavorito)
    modalFooter.appendChild(btnCerrar)
    
    //Muestra el modal
    modal.show();

  }

  function agregarFavorito(receta) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
  }

  function eliminarFavorito(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
  }

  function existeStorage(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritos.some(favorito => favorito.id === id)
  }

  function mostrarToast(mensaje){
    const toastDiv = document.querySelector('#toast')
    const toastBody = document.querySelector('.toast-body')

    const toast = new bootstrap.Toast(toastDiv)
    toastBody.textContent = mensaje
    toast.show();
  }

  function obtenerFavoritos(){
    //Verificar si exiten favoritos
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    if(favoritos.length){
      mostrarRecetas(favoritos)
      return
    }

    const noFavoritos = document.createElement('P')
    noFavoritos.textContent = 'Aún no hay favoritos'
    noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
    favoritosDiv.appendChild(noFavoritos)
  }

  function limpiarHTML(selector){
    while(selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
