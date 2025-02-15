let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  //Revisar campos vacios
  const camposVacios = [mesa, hora].some((campo) => campo === "");

  if (camposVacios) {
    //Verificar si ya hay una alerta
    const existeAlerta = document.querySelector(".invalid-feedback");

    if (!existeAlerta) {
      const alerta = document.createElement("div");
      alerta.classList.add("invalid-feedback", "d-block", "text-center");
      alerta.textContent = "Todos los campos son obligatorios";
      document.querySelector(".modal-body form").appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
    return;
  }

  //LLenando el objeto cliente
  cliente = { ...cliente, mesa, hora };

  //Ocular modal
  const modalFormulario = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  //Mostrar las secciones
  mostrarSecciones();

  //Obtener platillos de la API de Json Server
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");
  seccionesOcultas.forEach((seccion) => seccion.classList.remove("d-none"));
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarPlatillos(resultado))
    .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos");

  platillos.forEach((platillo) => {
    const row = document.createElement("div");
    row.classList.add("row", "py-3", "border-top");

    const nombre = document.createElement("div");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("div");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = `$${platillo.precio}`;

    const categoria = document.createElement("div");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    //Numero minimo
    inputCantidad.min = 0;
    inputCantidad.value = 0; //Inicia en 0
    inputCantidad.id = `producto-${platillo.id}`;
    inputCantidad.classList.add("form-control");
    //Funcion que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = () => {
      //De esta forma se llama cuando ocurre el evento
      const cantidad = parseInt(inputCantidad.value);

      agregarPlatillo({ ...platillo, cantidad }); //Creando un objeto con la cantidad y el platillo
    };

    const agregar = document.createElement("div");
    agregar.classList.add("col-md-2", "text-center");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  //Extraer el pedido actual
  let { pedido } = cliente;

  //Revisar que la cantidad sea mayor a 0
  if (producto.cantidad > 0) {
    //Comprobar si el elemento ya existe en el array
    if(pedido.some( item => item.id === producto.id)){
      //El articulo ya existe, actualizar la cantidad
      const pedidoActualizado = pedido.map(articulo => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad;
        }
        return articulo; //retorna el objeto actualizado
      })
      //Se asigna el nuevo array a cliente.pedido
      cliente.pedido = [...pedidoActualizado]
    } else {
      //Si el articulo no existe lo agregamos al array de pedido
      cliente.pedido = [...pedido, producto];
    }
  } else {
    //Eliminar elementos cuando la cantidad es 0
    const resultado = pedido.filter(articulo => articulo.id !== producto.id)
    cliente.pedido = [...resultado]
  }

  //Limpiar el HTML previo
  limpiarHTML()

  if(cliente.pedido.length){
    //Actualizar resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio()
  }
}

function actualizarResumen(){
  const contenido = document.querySelector('#resumen .contenido')

  const resumen = document.createElement('div')
  resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow')

  //Informacion de la mesa
  const mesa = document.createElement('p')
  mesa.textContent = 'Mesa: '
  mesa.classList.add('fw-bold')

  const mesaSpan = document.createElement('span')
  mesaSpan.textContent = cliente.mesa
  mesaSpan.classList.add('fw-normal')

  //Informacion de la hora
  const hora = document.createElement('p')
  hora.textContent = 'Hora: '
  hora.classList.add('fw-bold')

  const horaSpan = document.createElement('span')
  horaSpan.textContent = cliente.hora
  horaSpan.classList.add('fw-normal')

  //Agreagar los elementos al padre
  mesa.appendChild(mesaSpan)
  hora.appendChild(horaSpan)

  //TItulo de la sección
  const heading = document.createElement('h3')
  heading.textContent = 'Platillos Consumidos'
  heading.classList.add('text-center', 'py-2')

  //Iterar sobre el array de pedidos
  const grupo = document.createElement('ul')
  grupo.classList.add('list-group')

  cliente.pedido.forEach(articulo => {
    const { nombre, precio, cantidad, id } = articulo

    const lista = document.createElement('li')
    lista.classList.add('list-group-item')

    const nombreEl = document.createElement('h4')
    nombreEl.classList.add('my-4')
    nombreEl.textContent = nombre

    //Cantidad del articulo
    const cantidadEl = document.createElement('p')
    cantidadEl.classList.add('fw-bold')
    cantidadEl.textContent = `Cantidad: `

    const cantidadValor = document.createElement('p')
    cantidadValor.classList.add('fw-normal')
    cantidadValor.textContent = cantidad

    //Precio del articulo
    const precioEl = document.createElement('p')
    precioEl.classList.add('fw-bold')
    precioEl.textContent = `Precio: `

    const precioValor = document.createElement('p')
    precioValor.classList.add('fw-normal')
    precioValor.textContent = `$${precio}`

    //Subtotal del articulo
    const subtotalEl = document.createElement('p')
    subtotalEl.classList.add('fw-bold')
    subtotalEl.textContent = `Subtotal : `

    const subtotalValor = document.createElement('p')
    subtotalValor.classList.add('fw-normal')
    subtotalValor.textContent = calcularSubtotal(cantidad, precio)

    //Boton para eliminar
    const btnEliminar = document.createElement('button')
    btnEliminar.classList.add('btn', 'btn-danger')
    btnEliminar.textContent = 'Eliminar del pedido'

    //Funcion para eliminar del pedido
    btnEliminar.onclick = () => { eliminarProducto(id) }

    //Agregar valores a sus contenedores
    cantidadEl.appendChild(cantidadValor)
    precioEl.appendChild(precioValor)
    subtotalEl.appendChild(subtotalValor)

    //Agregar elementos al LI
    lista.appendChild(nombreEl)
    lista.appendChild(cantidadEl)
    lista.appendChild(precioEl)
    lista.appendChild(subtotalEl)
    lista.appendChild(btnEliminar)

    //Agregar elementos
    grupo.appendChild(lista)
  })

  //Agregar al contenido
  resumen.appendChild(heading)
  resumen.appendChild(mesa)
  resumen.appendChild(hora)
  resumen.appendChild(grupo)
  
  contenido.appendChild(resumen)

  //Mostrar formulario de propinas
  formularioPropinas()
}

function limpiarHTML(){
  const contenido = document.querySelector('#resumen .contenido')

  while(contenido.firstChild){
    contenido.removeChild(contenido.firstChild)
  }
}

function calcularSubtotal(cantidad, precio){
  return `$${cantidad * precio}`;
}

function eliminarProducto(id){
  const {pedido} = cliente

  const resultado = pedido.filter(articulo => articulo.id !== id)
  cliente.pedido = [...resultado]

  limpiarHTML()

  if(cliente.pedido.length){
    //Actualizar resumen
    actualizarResumen();
  } else {
    mensajePedidoVacio()
  }

  //El producto se elimino, por lo tanto regresamos la cantidad a 0
  const productoEliminado = `#producto-${id}` //Seleccionar el id
  const inputElementoEliminado = document.querySelector(productoEliminado)
  inputElementoEliminado.value = 0 //Regresar la cantidad a 0
}

function mensajePedidoVacio(){
  const contenido = document.querySelector('#resumen .contenido')

  const texto = document.createElement('p')
  texto.classList.add('text-center')
  texto.textContent = 'Añade los elementos del pedido'
  contenido.appendChild(texto)
}

function formularioPropinas(){
  const contenido = document.querySelector('#resumen .contenido')

  const formulario = document.createElement('div')
  formulario.classList.add('col-md-6', 'formulario')

  const divFormulario = document.createElement('div')
  divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow')

  const heading = document.createElement('h3')
  heading.textContent = 'Propina'
  heading.classList.add('my-4', 'text-center')

  //Radio buttons
  const radio10 = document.createElement('input')
  radio10.type = 'radio'
  radio10.name = 'propina'
  radio10.value = "10"
  radio10.classList.add('form-check-input')
  radio10.onclick = calcularPropina

  const radio10Label = document.createElement('label')
  radio10Label.textContent = '10%'
  radio10Label.classList.add('form-check-label')

  const radio10Div = document.createElement('div')
  radio10Div.classList.add('form-check')

  radio10Div.appendChild(radio10)
  radio10Div.appendChild(radio10Label)

  //Radio button 25%
  const radio25 = document.createElement('input')
  radio25.type = 'radio'
  radio25.name = 'propina'
  radio25.value = "25"
  radio25.classList.add('form-check-input')
  radio25.onclick = calcularPropina

  const radio25Label = document.createElement('label')
  radio25Label.textContent = '25%'
  radio25Label.classList.add('form-check-label')

  const radio25Div = document.createElement('div')
  radio25Div.classList.add('form-check')

  radio25Div.appendChild(radio25)
  radio25Div.appendChild(radio25Label)

  //Radio button 50%
  const radio50 = document.createElement('input')
  radio50.type = 'radio'
  radio50.name = 'propina'
  radio50.value = "50"
  radio50.classList.add('form-check-input')
  radio50.onclick = calcularPropina

  const radio50Label = document.createElement('label')
  radio50Label.textContent = '50%'
  radio50Label.classList.add('form-check-label')

  const radio50Div = document.createElement('div')
  radio50Div.classList.add('form-check')

  radio50Div.appendChild(radio50)
  radio50Div.appendChild(radio50Label)
  
  //Agregar al formulario
  divFormulario.appendChild(heading)
  divFormulario.appendChild(radio10Div)
  divFormulario.appendChild(radio25Div)
  divFormulario.appendChild(radio50Div)
  formulario.appendChild(divFormulario)
  contenido.appendChild(formulario)
}

function calcularPropina(){

  const {pedido} = cliente
  let subtotal = 0
  
  //Calcular el subtotal a pagar
  pedido.forEach(articulo => {
    subtotal += articulo.cantidad * articulo.precio
  })
  
  //Sleccionar el radio button con la propina del cliente
  const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value
  
  //Calcular la propina
  const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100)
  
  //Calcular el total a pagar
  const total = subtotal + propina;
  
  mostrarTotalHTML(subtotal, total, propina);

}

function mostrarTotalHTML(subtotal, total, propina){

  //Totales a pagar
  const totales = document.createElement('div')
  totales.classList.add('total-pagar')

  //Subtotal
  const subtotalParrafo = document.createElement('p');
  subtotalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5')
  subtotalParrafo.textContent = 'Subtotal: ';

  const subtotalSpan = document.createElement('span')
  subtotalSpan.classList.add('fw-normal')
  subtotalSpan.textContent = `$${subtotal}`

  subtotalParrafo.appendChild(subtotalSpan)

  //Propina
  const propinaParrafo = document.createElement('p');
  propinaParrafo.classList.add('fs-3', 'fw-bold', 'mt-2')
  propinaParrafo.textContent = 'Propina: ';

  const propinaSpan = document.createElement('span')
  propinaSpan.classList.add('fw-normal')
  propinaSpan.textContent = `$${propina}`

  propinaParrafo.appendChild(propinaSpan)

  //Total
  const totalParrafo = document.createElement('p');
  totalParrafo.classList.add('fs-3', 'fw-bold', 'mt-2')
  totalParrafo.textContent = 'total: ';

  const totalSpan = document.createElement('span')
  totalSpan.classList.add('fw-normal')
  totalSpan.textContent = `$${total}`

  totalParrafo.appendChild(totalSpan)

  //Eliminar el ultimo resultado
  const totalPagarDiv = document.querySelector('.total-pagar')
  if(totalPagarDiv){
    totalPagarDiv.remove()
  }


  totales.appendChild(subtotalParrafo)
  totales.appendChild(propinaParrafo)
  totales.appendChild(totalParrafo)

  document.querySelector('.formulario > div').appendChild(totales)
}