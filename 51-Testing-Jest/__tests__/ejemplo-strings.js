//Probar string
const password = '123456'

//Agrupa diferentes pruebas en un mismo archivo
describe('Valida el password y que tengo 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6)
    })

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0)
    })
})