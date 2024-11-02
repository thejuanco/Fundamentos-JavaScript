import { suma } from "../js/funciones.js";

//? Jest no soporta imports, se utiliza common js, se utiliza babel

describe('Suma de dos numeros', () => {
    test('Suma 10 y 20 debe de ser 30', () => {
        expect(suma(10, 20)).toBe(30);
    })
})