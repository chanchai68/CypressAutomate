let token = 

beforeEach(() => {
    //Call CustomCommand Session
    cy.loginSession(Cypress.env('UserSession'), Cypress.env('Pass'))
        cy.log(token)

  });
  
  
describe('Login', () => {
  it('Testeer', () => {
    cy.log(token)
  })
})