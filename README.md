# Projetos_Cypress

Este projeto foi clonado e feito para estudo e prática de testes automatizados utilizando Cypress. O objetivo é criar um conjunto de testes end-to-end (E2E) para garantir a qualidade e funcionalidade de uma aplicação web.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes E2E para aplicações web.
- **Node.js**: Ambiente de execução para JavaScript.
- **GitHub Actions**: Ferramenta de CI/CD para automação de fluxos de trabalho.
- **Mochawesome**: Relatório de testes para Cypress.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **Faker.js**: Biblioteca para geração de dados falsos para testes.

## Estrutura do Projeto

- **cypress/**: Contém os testes E2E, fixtures, resultados e screenshots.
  - **e2e/**: Testes E2E escritos em Cypress.
  - **fixtures/**: Arquivos de dados estáticos para uso nos testes.
  - **results/**: Resultados dos testes.
  - **screenshots/**: Capturas de tela dos testes.
  - **support/**: Arquivos de suporte para os testes.
- **server/**: Backend da aplicação.
- **web/**: Frontend da aplicação.

## Configuração e Execução

### Pré-requisitos

- Node.js instalado
- Cypress instalado globalmente (`npm install -g cypress`)


### Executando com GitHub Actions

Os testes são configurados para serem executados automaticamente em cada push para a branch main utilizando GitHub Actions. O arquivo de configuração está localizado em cypress.yml.

### Contribuição
Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie uma branch para sua feature ou correção de bug, e envie um pull request.
