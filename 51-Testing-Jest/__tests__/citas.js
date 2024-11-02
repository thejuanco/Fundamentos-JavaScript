import Citas from "../js/classes/Citas";

describe("Probar la clase de citas", () => {
    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Rex',
            propietario: 'Juan',
            telefono: '1234567890',
            fecha: '2022-01-15',
            hora: '10:00',
            sintomas: 'Sangre fría'
        };
        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();
    })

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Hook',
            propietario: 'Juan M.',
            telefono: '1234567890',
            fecha: '2022-01-15',
            hora: '10:00',
            sintomas: 'Sangre fría'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    })

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        //Pruebas
        expect(citas).toMatchSnapshot()
    });
})