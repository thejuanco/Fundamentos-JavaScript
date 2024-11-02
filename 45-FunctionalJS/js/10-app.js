//Composition -> es como una alternativa a las clases
const obtenerNombre = (info) => ({
  //La sintaxis de ({}), se utliza porque es una funcion dentro de otra funcion
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log(`Guardando email en: ${info.nombre}`);
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Email: ${info.email}`);
  },
});

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info)
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };

  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info)
  );
}

const cliente = Cliente("Juan", null, "Juancoo");
cliente.mostrarNombre();
cliente.agregarEmail("juanco@correo.com");
cliente.mostrarEmail();

const empleado = Empleado("Pedro", null, "Programador");
empleado.mostrarNombre();
empleado.agregarEmail("empleado@correo.com");
empleado.mostrarEmail();
