// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
   // Cypress commands you would like to run (once) at the start of each test run.
})

beforeEach(() => {
    // Cypress commands you would like to run before every single Cypress test.
     // login before all tests
     cy.fixture('auth').then((auth) => { // Retrieve auth.json fixture from fixtures folder
        cy.login(auth.testUser, auth.testPass)
      })
      cy.wait(2000)
})