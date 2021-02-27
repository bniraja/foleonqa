/// <reference types = "cypress-xpath"/>
describe('Search Project test ', () => {

    it('Valid Search',() => {
      cy.fixture('auth').then((auth) => { // Retrieve auth.json fixture from fixtures folder
        cy.login(auth.testUser, auth.testPass)
      })

    //TODO click on projects
    })
})