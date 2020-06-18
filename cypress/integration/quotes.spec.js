// write tests here
describe('Inputs and submit button', () => { // grouping several tests that are related
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
