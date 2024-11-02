///<reference types="cypress"/>

describe("Valida el formulario", () => {
  it("Submit al formulario y mostrar alerta de error", () => {
    cy.visit("http://127.0.0.1:5501/52-Testing-Cypress/index.html");

    //Validar el formulario
    cy.get('[data-cy="formulario"]').submit();

    //Selecionar la alerta
    cy.get("[data-cy=alerta]")
      .invoke("text")
      .should("contain", "Todos los campos son Obligatorios");
      
    //Validar por clases
    cy.get("[data-cy=alerta]")
      .should("have.class", "");

  });
});
