//Metodos de propiedad 
const reproductor = {
    nombre: function (id){
        console.log(`Reproduciendo cancion ${id}`)
    }, 
    pausar: function (id)
    {
        console.log(`Reproduciendo cancion ${id}`)
    }, 
    añadir: function(id){
        console.log(`Añadiendo cancion ${id}`)
    }
}

reproductor.añadir(23); 
reproductor.nombre(1)
reproductor.pausar(9)