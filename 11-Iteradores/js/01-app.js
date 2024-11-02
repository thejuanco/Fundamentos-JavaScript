//Iteradores: For Loop 

//Se ejecuta cuando se deja de cumplir la condicion 
for (let i=0; i<10; i++) {
    console.log('numero', i);
}

/*El primer parametro es el inicializador, el segundo es el tope, hasta donde de deja de ejecutar el inicializador 
y el tercero es el incremento */

//Pregunta de entrevista: En un for loop como identificas los numeros que son pares e inpares
for (let i=1; i<10; i++) {
    if (i % 2 === 0) {
            console.log('El numero es par:', i);
        } else {
            console.log('El numero es impar:', i);
        }
}