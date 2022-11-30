let productid
  
describe('Use Data', () => {
  it('API EDIT Product', () => {
    //get productid from command
    cy.AddProduct(Cypress.env('Name'),Cypress.env('Category')).then((value) => {
      productid = value
    cy.request({
        method: 'PUT',
        url: `https://fakestoreapi.com/products/${productid}`,
        headers:{
      },
        body: {
          title: "CucumberEdit",
          price: "250",
          description: "edit name & price",
          image: "https://i.pravatar.cc",
          category: "Vegetable",
          }
      })
        .then((response) => { 
          expect(response.status).to.eq(200)
          expect(response.body.title).to.eq("CucumberEdit")
          expect(response.body.price).to.eq("250")
          expect(response.body.category).to.eq("Vegetable")
      })
    })
    })
      
    it('Serch Product On Web', () => {
      cy.visit("http://google.com")
      cy.AddProduct(Cypress.env('Name'),Cypress.env('Category')).then((value) => {
      cy.get('input[name="q"]').type("OrderID = " + value)
      })
      
      })

})