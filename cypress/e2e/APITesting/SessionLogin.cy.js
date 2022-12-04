let token = 

beforeEach(() => {
    cy.APILogin(Cypress.env('UserSession'), Cypress.env('Pass')).then((value) => {
        token = value
        cy.log(token)
    })
  });
  
  
describe('Login', () => {
  it('Testeer', () => {
    cy.log(token)
  })
})