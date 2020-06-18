// write tests here
describe('Inputs and submit button', () => { // grouping several tests that are related
  it('can navigate to the site', () => { // this is the test
    // remote control operation
    cy.visit('http://localhost:1234')

    // assertion
    cy.url().should('include', 'localhost')
  })
})
