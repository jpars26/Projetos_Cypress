describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    context('Verifica o redirecionamento da pagina!',()=>{

        it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.location('pathname').should('equal', '/cadastro')

        })
    })
        
    context('Primeira parte da sessão de cadastro', () => {

        it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
            cy.get('[href="/cadastro"]').click();
            cy.cadastro('Joao','12.156.812/0001-02','jpars@gmail.com','Senha1234');
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
            cy.get('.sc-laZRCg').should('exist').should('be.visible');
          
        })
    })

    context('Segunda parte da sessao inserindo dados tecnicos', () =>{
        it('Cadastro completo da clinica!', () =>{
            cy.get('[href="/cadastro"]').click();
            cy.cadastro('Joao','12.156.812/0001-02','jpars@gmail.com','Senha1234');
            cy.dados_tecnicos('9999999','37550000','rua aleatoria', '23', 'casa', 'MG');
            cy.location('pathname').should('equal', '/login');
        })
    })
})  

