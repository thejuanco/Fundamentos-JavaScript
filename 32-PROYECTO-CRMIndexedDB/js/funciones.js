let DB;

function conectarDB() {
  const abrirConexion = window.indexedDB.open("crm", 1);

  abrirConexion.onerror = function () {
    console.error("Hubo un error");
  };

  abrirConexion.onsuccess = function () {
    DB = abrirConexion.result;
  };
}

function imprimirAlerta(mensaje, tipo) {
  const alerta = document.querySelector(".alerta");

  if (!alerta) {
    //Crear la alerta
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(
      "px-4",
      "py-3",
      "rounded-lg",
      "max-w-lg",
      "mx-auto",
      "text-center",
      "border",
      "mt-2",
      "alerta"
    );

    tipo === "error"
      ? divMensaje.classList.add("bg-red-100", "border-red-500", "text-red-700")
      : divMensaje.classList.add(
          "bg-green-100",
          "border-green-500",
          "text-green-800"
        );

    //Agregar el mensaje
    divMensaje.textContent = mensaje;

    //Insertar en el HTML
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 2000);
  }
}

export { conectarDB, imprimirAlerta };
