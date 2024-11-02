//Implicit binding: le decimos de forma implicita en donde va a encontrar los valores del objeto

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
        //this nos permite encontrar los valores en el mismo objeto
    },
    mascota: {
        nombre: 'Perro',
        edad: 5,
        informacion() {
            console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
            //this nos permite encontrar los valores en el mismo objeto
        }
    }
}

usuario.informacion()
usuario.mascota.informacion()