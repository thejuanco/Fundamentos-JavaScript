///<reference types="cypress"/>

describe('Carga la pagina principal', function() {
    it('Carga la pagina principal', function() {

        //Cypress primero debe acceder a la ruta de la pagina
        cy.visit('http://127.0.0.1:5501/52-Testing-Cypress/index.html')
        //Verifica que contiene el titulo de la pagina
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria')
        //Verfica si existe el h1 para el titulo
        // cy.get('h1').should('exist')
        //Buena practica
        cy.get('[data-cy="titulo-proyecto"]').should('exist')

        //Verifica que exista el elemento  y contenga un texto
        cy.get('[data-cy="titulo-proyecto"]').invoke('text').should('equal', 'Administrador de Pacientes de Veterinaria')
        //Buena practica
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria')

        //Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]').invoke('text').should('equal','No hay Citas, comienza creando una')
        
    })
})