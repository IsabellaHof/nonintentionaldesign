/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('starts without player', () => {
    cy.get('[data-test-id="SetupScreen-player"]').should('not.exist')
    cy.get('input').should('have.attr', 'placeholder', 'Playername')
  })

  it('starts without play button, but with hint text', () => {
    cy.get('[data-test-id="SetupScreen-playButton"]').should('not.exist')

    cy.get('[data-test-id="SetupScreen-hint"]').should(
      'contain',
      'add one Player!'
    )
  })

  describe.only('App with a player', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Playername')
        .type('John{Enter}')
    })

    it('can delete all players', () => {
      cy.get('button')
        .contains('Clear All Players')
        .should('exist')
        .click()
      cy.get('[data-test-id="SetupScreen-player"]').should('not.exist')
    })

    xit('has a player', () => {
      cy.get('[data-test-id="SetupScreen-player"]').should('contain', 'John')
    })

    it('navigates to the next screen', () => {
      cy.get('button')
        .contains('Play!')
        .should('exist')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', 'summary')
    })
  })
})
