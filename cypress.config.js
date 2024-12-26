/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "email": "jpars@gmail.com",
    "senha": "Senha4321",
    "api_login": "http://localhost:8080/auth/login",
    "api_clinica": "http://localhost:8080/clinica",
    "api_especialista": "http://localhost:8080/especialista",
    "requestMode": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    },
    
    defaultCommandTimeout: 60000
  },
});