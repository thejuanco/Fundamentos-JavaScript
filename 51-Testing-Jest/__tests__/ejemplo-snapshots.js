//Introduccion a los snapshots
const cliente = {
    nombre: 'Juan 2',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('El cliente es Juan', () => {
        expect(cliente).toMatchSnapshot();
    })
})