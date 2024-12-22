describe('Pagina Dashboard', () => {
    beforeEach(() =>{
        cy.fixture('especialista').as('especialistas') // Carrega o arquivo 'especialista.json' como alias
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Passando credenciais do ambiente

    })

    context('Redirecionamento pagina dashboard', () => {
       it('Verificar a pagina dashboard', () => {
           cy.visit('/dashboard')
           cy.url().should('eq', 'http://localhost:3000/dashboard');
    
       })

       it('Com o Usuario logado Cadastro Especialista', () => {
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.contains('Cadastrar especialista').should('be.visible').click();
        })
    })

    context('Preencher os dados do especialista', () => {
        it('Verifica se o checkbox "Atende por plano?" está desmarcado', () => {
            cy.visit('/dashboard');
            cy.contains('Cadastrar especialista').should('be.visible').click();
            //Verifica se o checkbox está desmarcado - no should verifica se ele tem atributo, se tem a fonte arial e o texto é compativel
            cy.get('[type="checkbox"]').should('have.attr', 'aria-label', 'Atende por plano?').and('not.be.checked')
        })

        it('Seleciona alguns checkbox e verifica se esles estão funcionando e nao desabilitados', () => {
            cy.visit('/dashboard');
            cy.contains('Cadastrar especialista').should('be.visible').click();
            cy.get('[type="checkbox"]').check();
            cy.get('form').find('input[type="checkbox"]').should('be.checked').and('not.be.disabled');
            cy.get('[type="checkbox"]').check(['Unimed', 'Biovida', 'Bradesco']);
        })


        it('Adicionar os dados especialistas', () => {
            cy.get('@especialistas').then((dados) => {
                const especialista = dados.especialistas[1];
                cy.cadastrarEspecialista(
                    especialista.nome,
                    especialista.email,
                    especialista.senha,
                    especialista.especialidade,
                    especialista.crm,
                    especialista.telefone,
                    especialista.imagem,
                    especialista.cep,
                    especialista.rua,
                    especialista.numero,
                    especialista.complemento,
                    especialista.estado
                );
                cy.get('[type="checkbox"]').check();
                //Utiliza o scroll da pagina para verificar 
                cy.get('[type="checkbox"]').last().scrollIntoView({ easing: 'linear' });
                //Verifica se o formulario está visivel e percorre todos os filhos desse formulario
                cy.get('.MuiFormGroup-root').children().each(($checkbox) => {
                    cy.wrap($checkbox).should('be.visible')
                })
                cy.get('[type="checkbox"]').check(['Unimed', 'Amil', 'Bradesco']);
                cy.get('form > .sc-bcXHqe').click();
            })

        })
    })
})