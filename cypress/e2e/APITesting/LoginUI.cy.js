export function login() {

    Cypress.Commands.add("Login", (Username,Password,Case) => {
    
        cy.get('.u-mb30').should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).contains('Enter Your Email to Sign in')
          }) 
    
          switch (Case) {
            case "Fail1": 
            //Check Error Message
                cy.get('#email', { timeout: 5000 }).type(Username)
                cy.get('.messages-container > .label', { timeout: 5000 }).should('be.visible').invoke('text').then((text) => {
                 expect(text.trim()).contains('Invalid email')

                 cy.url().should('include', '/login') 
                })
            break;
            case "Fail2": 
            //Check Error Message
                cy.get('#email', { timeout: 5000 }).clear().type(Username)
                cy.get('.btn', { timeout: 5000 }).scrollIntoView().click()
                cy.get('.u-mb30', { timeout: 5000 }).should('be.visible').invoke('text').then((text) => {
                 expect(text.trim()).contains('Create an Account')

                 cy.url().should('include', '/sign-up') 
                })
            break;
            case "Pass":
                //Input Username
                 cy.get('#email').clear().type(Username)
                 cy.get('.btn').scrollIntoView().click()
                 cy.wait(1000)
                 cy.get('.required-asterisk', { timeout: 5000 }).should('be.visible').invoke('text').then((text) => {
                    expect(text.trim()).contains('Password') })
                 cy.get('#password').type("Pass")
                 //check alert
                 cy.get('.messages-container > .label', { timeout: 5000 }).should('be.visible').invoke('text').then((text) => {
                    expect(text.trim()).contains('Password should be 5 to 128 characters long') })
                //Input Username
                 cy.get('#password', { timeout: 5000 }).clear().type(Password).should('have.value', Password)
                //  cy.intercept('POST', '**/client-api/signin').as('checklogin')
                 cy.get('.btn').scrollIntoView().click()
                //Intercept API
                // cy.wait('@checklogin').its('response.statusCode').should('eq', 200)
            break;
          
        }
      })    
    
    context('Chester', () => {
      describe('Login', () => {
        beforeEach(() => {
          cy.once('uncaught:exception', () => false);
          cy.visit(Cypress.env('URLLogin') + 'login', {
            onBeforeLoad: (win) => {
              win.sessionStorage.clear()
            }
          })
          
        })
        it('Incorrect formate email', () => {
        cy.Login('qatest',Cypress.env('Pass'),'Fail1')
    })
        it('Incorrect email', () => {
        cy.Login('qa123@gmail.com',Cypress.env('Pass'),'Fail2')
      })
        it('Login Success', () => {
        cy.Login(Cypress.env('User'),Cypress.env('Pass'),'Pass')
      })
    
      
    })
    
    
    })
    
    }
    
    login();
    
    
    