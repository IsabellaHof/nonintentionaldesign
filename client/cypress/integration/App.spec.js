/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('infoscreen', () => {
    cy.get('[data-test-id="InfoScreen"]').should('exist')
  })
})

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/nids')
    cy.clearLocalStorage()
  })

  it('imagescreen', () => {
    cy.get('[data-test-id="ImageScreen"]').should('exist')
  })
})
