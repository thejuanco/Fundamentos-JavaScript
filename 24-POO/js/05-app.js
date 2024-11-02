//Propiedades en JS
class Cliente {

    //Volviendo privada la clase
    #nombre

    //En lugar de poner el nombre en el constructor utlizamos el set
    setNombre(nombre){
        //Volviedo privada el atributo nombre
        this.#nombre = nombre;
    }

    //Obteniendo el nombre
    getNombre(){
        return this.#nombre;
    }
}

const juan = new Cliente()
juan.setNombre('Juan')
console.log(juan.getNombre())