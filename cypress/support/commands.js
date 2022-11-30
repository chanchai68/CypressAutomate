// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("AddProduct", (name, category) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('URLPOST'),
        headers:{
          // "authorization": token
      },
        body: {
          title: name,
          price: "500",
          description: "Test Automate",
          image: "https://i.pravatar.cc",
          category: category,
          }
      })
        .then((response) => { 
          expect(response.status).to.eq(200)
          cy.log(response.body.id)
          expect(response.body.title).to.eq("Cucumber")
          expect(response.body.price).to.eq("500")
          return cy.wrap(response.body.id)
      })
  })