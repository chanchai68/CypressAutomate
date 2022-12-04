const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   require('cypress-data-session/src/plugin')(on, config)
    // },
    experimentalStudio: true,
    defaultCommandTimeout : 10000,
    experimentalSessionAndOrigin: true ,
    pageLoadTimeout:10000
  },
  env: {
    "URLLogin": "https://parabank.parasoft.com/parabank/index.htm",
    "User": "Chanchai",
    "UserSession": "chanchaifwork@gmail.com",
    "Pass": "Password123",
    "URLGET": "https://api.genderize.io?name=chanchai",
    "URLPOST": "https://fakestoreapi.com/products",
    "URLPUT": "https://fakestoreapi.com/products/7",
    "APILogin": "https://identity.telerik.com/client-api/signin",
    "Name": "Cucumber",
    "Category": "Vegetable"
  },
  "reporter": "mochawesome",
     "reporterOptions": {
       "charts": true,
       "overwrite": false,
       "html": false,
       "json": true,
       "reportDir": "cypress/report/mochawesome-report"
      },
});