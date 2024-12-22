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

Cypress.Commands.add('login', (email, senha) => {
    cy.session([email, senha], () => {       
        cy.visit('/login');
        cy.get('[data-test="inputLoginEmail"]').type(email);
        cy.get('[data-test="inputLoginSenha"]').type(senha, { log: false});
        cy.get('[data-test="botaoTeste"]').click();
        cy.location('pathname').should('eq', '/login');
        cy.location('pathname').should('eq', '/dashboard');
    })

})

Cypress.Commands.add('cadastrarEspecialista', (nome, email, senha, especialidade, crm, telefone, imagem, cep, rua, numero, complemento, estado) => {
    cy.visit('/dashboard');
    cy.contains('Cadastrar especialista').should('be.visible').click();
    cy.get('[data-test="inputEspecialistaNome"]').type(nome);
    cy.get('[data-test="inputEspecialistaEmail"]').type(email);
    cy.get('[data-test="inputEspecialistaSenha"]').type(senha);
    cy.get('[data-test="inputEspecialistaSenhaVerificada"]').type(senha);
    cy.get('[data-test="inputEspecialistaEspecialidade"]').type(especialidade);
    cy.get('[data-test="inputEspecialistaCRM"]').type(crm);
    cy.get('[data-test="inputEspecialistaTel"]').type(telefone);
    cy.get('[data-test="inputEspecialistaImagem"]').type(imagem);
    cy.get('[data-test="inputEspecialistaCEP"]').type(cep);
    cy.get('[data-test="inputEspecialistaRua"]').type(rua);
    cy.get('[data-test="inputEspecialistaNumero"]').type(numero);
    cy.get('[data-test="inputEspecialistaComplemento"]').type(complemento);
    cy.get('[data-test="inputEspecialistaEstado"]').type(estado);
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