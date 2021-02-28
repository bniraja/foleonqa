describe('Search Project tests ', () => {

    beforeEach(() => {
      cy.get('ul[role="menu"]')
        .contains('Projects')
        .click({force: true}) 
        .as('ClickOnProjectsMenu')
    })
  
    it('Valid Search',() => {
        // Click on projects menu
        cy.get('@ClickOnProjectsMenu')
  
        cy.wait(2000)
        
        // search
        const searchText = 'foleon'
        cy.get('[data-testid="uikit.inputSearch.searchInput"]').type(searchText)
  
        cy.wait(2000)
        
        // assert results
        cy.get('.ReactVirtualized__Grid__innerScrollContainer')
          .find('a').find('li')
          .should((result) => {
              expect(1, 'At least one result is expected').to.be.lte(result.length)
          })
    })
  
    it('Invalid Search',() => {
        // Click on projects menu
        cy.get('@ClickOnProjectsMenu') 
  
        cy.wait(2000)
  
        // search projects
        const searchText = 'invalid project'
        cy.get('[data-testid="uikit.inputSearch.searchInput"]').type(searchText)
  
        cy.wait(2000)
        
        // assert
        cy.get('.ReactVirtualized__Grid__innerScrollContainer')
          .find('a').find('li')
          .should((result) => {
              expect(result).to.have.length(0)
          })
  
        cy.contains('No projects found').should('be.visible')
    })
  })  