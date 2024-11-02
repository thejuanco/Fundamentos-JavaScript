const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Promise aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

//Como utilizara los promises
aplicarDescuento
  .then((resultado) => {
    console.log(descuento(resultado));
  })
  .catch((error) => {
    console.log(error);
  });

console.log(aplicarDescuento);

//Hay 3 valores posibles en los promises
/*
    --Fullfilled : El promise se cumplio
    --Reject : EL promise no se cumplio
    --Pending : El promise aun no se cumple, pero tampoco fue rechazado
*/

function descuento(mensaje) {
  console.log(mensaje);
}
