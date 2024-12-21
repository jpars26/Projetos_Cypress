Cypress.Commands.add('cadastro', (nome, cnpj, email, password) => { 
    cy.get('[data-test="inputNome"]').type(nome);
    cy.get('[data-test="inputCNPJ"]').type(cnpj);
    cy.get('[data-test="inputEmail"]').type(email);
    cy.get('[data-test="inputSenha"]').type(password);
    cy.get('[data-test="inputSenhaVerificada"]').type(password);
    cy.get('.sc-bcXHqe').click();
    
    
     })


Cypress.Commands.add('dados_tecnicos',(telefone, cep, rua, numero, complemento, estado) => {
    cy.get('[data-test="inputTelefone"]').type(telefone);
    cy.get('[data-test="inputCEP"]').type(cep);
    cy.get('[data-test="inputRua"]').type(rua);
    cy.get('[data-test="inputNumero"]').type(numero);
    cy.get('[data-test="inputComplemento"]').type(complemento);
    cy.get('[data-test="inputEstado"]').type(estado);
    cy.get('.sc-bcXHqe').click();
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })