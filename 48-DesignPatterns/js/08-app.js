//Meditator

function Vendedor(nombre){
    this.nombre = nombre
    this.sala = null
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre
    this.sala = null
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${cantidad} : ${comprador.nombre}`);
    },
    comprar: vendedor => {
        console.log(`Has comprado el articulo con el vendedor ${vendedor.nombre}`);
    }
}

function Subasta(){
    let compradores = {}
    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//Tienes que registrarlos
subasta.registrar(juan)
subasta.registrar(pablo)
subasta.registrar(vendedor)

vendedor.oferta('Mustang 66', 300)

juan.oferta(350, juan)
pablo.oferta(400, pablo)
juan.oferta(450, juan)
pablo.oferta(700, pablo)

vendedor.vendido('Pablo')