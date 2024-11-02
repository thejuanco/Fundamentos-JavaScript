//Operador && AND 

//Revisa que se cumplan dos condiciones 
const usuario = false  
const puedePagar = false 

//En caso de que no se cumpla una, manda al else 
if(usuario && puedePagar){
    console.log('Si puedes pagar')
} else if (!usuario && !puedePagar){
    console.log('No puedes comprar')
} else if(!usuario){
    console.log('Inicia sesion o paga tu cuenta ')
} else if(!puedePagar){
    console.log('No tienes fondos')
} 

//Cuando se trabaja con los else if el orden es importante 