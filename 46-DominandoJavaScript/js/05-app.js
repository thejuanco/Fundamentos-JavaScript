//Explicit binding
//?: Cual es la diferencia entre apply y call es que call le tienes que pasar los elementos de manera individual 
//? y el apply le puedes pasar el elemento completo

//Call binding: this se establece en el contexto del primer argumento

//Llamando elementos fuera del objeto

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}

const informacion = {nombre: 'Juan'}

const musicaFavorita = ['Heavy metal', 'Rock']

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]) //Call existe en todas las funciones, es como si "jalara" el objeto

//Apply
persona.apply(informacion, musicaFavorita)

//bind: Crea una nueva función y le pasamos los valores de manera individual
const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevaFuncion()