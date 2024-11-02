//Probando Objetos
const cliente = {
    nombre: 'Juan',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        //Verificar la cantidad del balance
        expect(cliente.balance).toBeGreaterThan(400);
    })

    test('Es Juan', () => {
        //Veficar el valor, que sea exactamente el mismo
        expect(cliente.nombre).toBe('Juan');
    })

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    })

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    })
})