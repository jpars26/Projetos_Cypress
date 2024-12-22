describe('Pagina de Login', () =>{
    beforeEach(() => {
        cy.visit('/');
    })

    context('Verificar a primeira parte login e verificar a sessao!', () => {
        it('Clica no botao de Entrar', () => {
            cy.get('.sc-iJnaPW').click();
            cy.location('pathname').should('equals', '/login');
        })
    })

    context('Logar com as credenciais corretas', () => {
        it('Preenche os campos de login e senha', () => {
            cy.get('.sc-iJnaPW').click();
            cy.login(Cypress.env('email'), Cypress.env('senha')); // Passando credenciais do ambiente
        })
    })
})