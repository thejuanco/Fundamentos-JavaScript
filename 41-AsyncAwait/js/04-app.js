function descargarNuevosClientes() {
  return new Promise((resolve, reject) => {
    console.log('Descargando nuevos clientes')
    setTimeout(() => {
      resolve("Los nuevos clientes se descargaron correctamente");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
    return new Promise((resolve, reject) => {
      console.log('Descargando Pedidos')
      setTimeout(() => {
        resolve("Los nuevos pedidos se descargaron correctamente");
      }, 3000);
    });
  }
  
//TODO: 

const app = async () => {
    try {
        //Ganando performance
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]); //Se ejecutan las dos funciones
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

app();