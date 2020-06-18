// write tests here
describe('Inputs and cancel button', () => { // grouping several tests that are related
  it('can navigate to the site', () => { // this is the test
    // remote control operation
    cy.visit('http://localhost:1234')

    // assertion
    cy.url().should('include', 'localhost')
  })

  it('submit button should be disabled', () => { // second test
    cy.get('button#submitBtn').should('be.disabled')
  })

  it('can type a text for a new quote', () => {
    cy.get('input[name=text]')
      .type('Lady Gaga')
      .should('have.value', 'Lady Gaga')
  })

  it('the submit button should still be disabled', () => {
    cy.get('button#submitBtn').should('be.disabled')
  })

  it('can type an author for a new quote', () => {
    cy.get('input[name=author]')
      .type('An author')
      .should('have.value', 'An author')
  })

  it('the submit button should BE ENABLED NOW!', () => {
    cy.get('button#submitBtn').should('not.be.disabled')
  })

  it('can cancel the new quote', () => { // individual test
    // remote control operation
    // (but also checks that the button exists, otherwise test fails)
    cy.get('button#cancelBtn').click()

    // assertions:
    // 1- both inputs should go back to empty
    // 2- the submit button should go back to disabled
    cy.get('input[name=text]').should('be.empty')
    cy.get('input[name=author]').should('be.empty')
    cy.get('button#submitBtn').should('be.disabled')
  })
})

describe('Creation of new quote', () => {
  it('can navigate to the site', () => { // this is the test
    cy.visit('http://localhost:1234')
  })

  it('can add a new quote', () => {
    // SET UP FOR THE TEST
    // type text
    // type auther
    // find the submit button and click it
    cy.get('input[name=text]').type('new quote')
    cy.get('input[name=author]').type('jessica')
    cy.get('button#submitBtn').click()

    // THE REAL CHECKS COME NOW
    // 1- inputs clear themselves
    // 2- the new quote shows on the page

    // CLEAN UP
    // delete the new post we just created
  })
})
