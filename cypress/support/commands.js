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

  Cypress.Commands.add("APILogin", (username, password) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('APILogin'),
        headers:{
          // "authorization": token
      },
        body: {
          "rememberMe": true,
          "username": "chanchaifwork@gmail.com",
          "password": "Password123",
          "relyingPartyParams": {
            "clientId": "http://www.lean.telerik.com",
            "redirectUri": "https://www.telerik.com/tracking/login?redirect_uri=https%3a%2f%2fwww.telerik.com%2faccount%2f",
            "responseType": "code",
            "state": "187C200A59CA32EDCC9E4A99F73773E951EC4894DA638020494D417C23C8AE7E"
          },
          "captchaToken": "03AEkXODCPuNmlfqdpxloh83i6mOr92hSsimMxEem2MRt8OEh-5_cu34_TAbT3JVrDA-dX882HsXqs8uAPFXWc1Q_K3vpQ3cV-DQJOdsvR1ADA8zjInbikwO1B6pEP5RdVKfgmSntOZVOR4UZf-P_HATDkeHEOlabnSGlbY1BCTlETvdH__-hjIDd4JR0aOIDTjnAXho8gvPOQauLCDr3UbvKWKhwmbZ_p6ov2wcZowhnFXSNKF8R22kWbjd6rv7jbHJYSjF5rGNhiyqr23485y2L6M70SPfTISsLncMaNc8OBnd3-IhHqhTJOiKsXjA48KgFAF4nChOi7GbGFzZ7H6sE2NgjrMjmA683gAAtf8jgKLB1emOiGYiXK7M33vIh4iDvvqrmye8U_INRkRzsoTBQbmQpIDGj_cRo8SIofVVHPyKmJ8CiF7Y0Pt9DvmX2HRYrJ8TFZDqSrfbr0S68nRv2ctW39fOykLbXyvsdohH7GwxezU_8lZC6tEhTD2TVcNBG6w74e0op_8fY6sSCYjc_UZlNM4sYvFO1o_vJ8K61I8gsypU-YcJ7XfOscXh4U5bmV1898_krRAZAmYIdIqGfduVsFfKaOFg"
        }
      })
        .then((response) => { 
          expect(response.status).to.eq(200)
          // return cy.wrap(response.body.id)
      })
  })