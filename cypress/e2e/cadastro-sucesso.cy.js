import { fakerPT_BR as faker } from "@faker-js/faker";
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
        let senha = faker.internet.password({ length: 8, memorable: true });
        it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
            cy.get('[href="/cadastro"]').click();
            cy.cadastro(faker.internet.username(),faker.string.numeric(14),faker.internet.email(),senha);
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
            cy.get('.sc-laZRCg').should('exist').should('be.visible');
          
        })
    })

    context('Segunda parte da sessao inserindo dados tecnicos', () =>{
        let senha = faker.internet.password({ length: 8, memorable: true });
        it('Cadastro completo da clinica!', () =>{
            cy.get('[href="/cadastro"]').click();
            cy.cadastro(faker.internet.username(),faker.string.numeric(14),faker.internet.email(),senha);
            cy.dados_tecnicos(faker.phone.number(),faker.location.zipCode(),faker.location.street(), faker.location.buildingNumber(), faker.location.secondaryAddress(), faker.location.state({ abbreviated: true }));
            cy.location('pathname').should('equal', '/login');
        })
    })
})  

