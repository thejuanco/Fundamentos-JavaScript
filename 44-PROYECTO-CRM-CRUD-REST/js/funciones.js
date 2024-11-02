export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(
      "bg-red-100",
      "border-red-700",
      "text-red-700",
      "p-4",
      "rounded-lg",
      "max-w-lg",
      "text-center"
    );
    divMensaje.innerHTML = `
            <strong class="font-bold">Erro!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

    document.querySelector('#formulario').appendChild(divMensaje)

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function validar(obj){ 
    return !Object.values(obj).every(input => input!== '') //Validando los campos
}

export {
    validar
}
