//Namespaces - crea un objeto global y evita el choque de nombres de funciones

const restaurantApp = {}

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
]

restaurantApp.funciones = {
    mostrarMenu : (platillos) => {console.log('Bienvenido a nuestro menu')
        platillos.forEach((platillo, index) => console.log(`${index}: ${platillo.platillo} $ ${platillo.precio}`))
    },
    ordenar: id => {
        console.log(`Tu platillo ${restaurantApp.platillos[id].platillo} se esta preparando`)
        // Implementar el código para ordenar el platillo
    },
    agergarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo)
        console.log(`Se agrego el platillo ${nuevo.platillo} con precio $${nuevo.precio}`)
    }
}

restaurantApp.funciones.ordenar(1)
restaurantApp.funciones.agergarPlatillo('Taco', 20)
const {platillos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos)