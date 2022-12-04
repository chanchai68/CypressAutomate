export function login() {

    Cypress.Commands.add("Login", (Username,Password,Case) => {
    
      cy.get('h2').should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).contains('Customer Login')
          }) 
    
          switch (Case) {
            case "Fail": 
            //Check Error Message
              cy.get(':nth-child(2) > .input').clear().type(Username).should('have.value', Username)
              cy.get(':nth-child(4) > .input', { timeout: 5000 }).clear().type(Password).should('have.value', Password)
              cy.get(':nth-child(5) > .button').scrollIntoView().click()
                cy.get('.error', { timeout: 5000 }).should('be.visible').invoke('text').then((text) => {
                 expect(text.trim()).contains('An internal error has occurred and has been logged.')

                 cy.url().should('include', '/login') 
                })
            break;
            case "Pass":
                //Input Username
                cy.get(':nth-child(2) > .input').clear().type(Username).should('have.value', Username)
                 cy.wait(1000)
                //Input Password
                cy.get(':nth-child(4) > .input', { timeout: 5000 }).clear().type(Password).should('have.value', Password)
                //  cy.intercept('POST', '**/client-api/signin').as('checklogin')
                cy.get(':nth-child(5) > .button').scrollIntoView().click()
                cy.url().should('include', '/overview')
                //Intercept API
                // cy.wait('@checklogin').its('response.statusCode').should('eq', 200)
            break;
          
        }
      })    
    
    context('Test LoginUI', () => {
      describe('Login', () => {
        beforeEach(() => {
          cy.once('uncaught:exception', () => false);
          cy.visit(Cypress.env('URLLogin'), {
            onBeforeLoad: (win) => {
              win.sessionStorage.clear()
            }
          })
          
        })
        it('Incorrect Username', () => {
        cy.Login('qatest',Cypress.env('Pass'),'Fail')
    })
        it('Incorrect Password', () => {
        cy.Login(Cypress.env('User'),"123456",'Fail')
      })
        it('Login Success', () => {
        cy.Login(Cypress.env('User'),Cypress.env('Pass'),'Pass')
      })
    
      
    })
    
    
    })
    
    }
    
    login();
    
    
    