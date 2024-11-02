//Probar arrays
const carrito = [
    'Producto 1',
    'Producto 2',
    'Producto 3'
]

//Practicamente la forma de probar arreglos es similar a los strings
describe('Testing al carrito de compras', () => {
    test('Probar que el carrito tengo 3 elementos', () => {
        expect(carrito).toHaveLength(3);

    })

    test('Verifica que el carrino no este vacio', () => {
        expect(carrito).not.toHaveLength(0)
    })
})