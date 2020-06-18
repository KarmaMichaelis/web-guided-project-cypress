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
})
