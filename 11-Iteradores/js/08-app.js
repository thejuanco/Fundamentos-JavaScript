//for in, su sintaxis es muy similar con for...of 

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

for (let pendiente of pendientes) {
    console.log(pendiente)
}

const auto = {
    modelo: 'Camaro', 
    year: 1989, 
    motor: '6.0'
}

for(let autos in auto){
    console.log(auto[autos])
}

//For of itera sobre arreglos mientras que for in itera sobre objetos 
//Una nueva forma de iterar en ES7 
for(let [llave, valor] of Object.entries(auto)){
    console.log(llave); 
    console.log(valor);
}