let token = 

beforeEach(() => {
    // cy.LoginAPICustomer(Cypress.env('Username_STG'), Cypress.env('Password_STG')).then((value) => {
    //     token = value
    // })
    cy.log('TestBefore')
  });
  
  
describe('API Testing', () => {
  it('Get', () => {
    cy.request({
        method: 'GET',
        url: Cypress.env('URLGET'),
          
      })
        .then((response) => { 
          expect(response.status).to.eq(200)
      })
      
    })
    it('POST', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('URLPOST'),
            headers:{
              // "authorization": token
          },
            body: {
              title: "test product",
              price: 13.5,
              description: "lorem ipsum set",
              image: "https://i.pravatar.cc",
              category: "electronic",
              }
          })
            .then((response) => { 
              expect(response.status).to.eq(200)
              expect(response.body.title).to.eq("test product")
          })
          
        })
        it('PUT', () => {
          cy.request({
              method: 'PUT',
              url: Cypress.env('URLPUT'),
              headers:{
            },
              body: {
                title: "test product",
                price: 13.5,
                description: "edit",
                image: "https://i.pravatar.cc",
                category: "electronic",
                }
            })
              .then((response) => { 
                expect(response.status).to.eq(200)
            })
            
          })
})