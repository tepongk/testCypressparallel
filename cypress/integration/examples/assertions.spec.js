/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions')
  })

  describe('Implicit Assertions', () => {

    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('.assertion-table')
        .find('tbody tr:last').should('have.class', 'success')
    })

  })
})
