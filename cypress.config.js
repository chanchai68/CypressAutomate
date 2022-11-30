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
    "URLGET": "https://api.genderize.io?name=chanchai",
    "URLPOST": "https://fakestoreapi.com/products",
    "URLPUT": "https://fakestoreapi.com/products/7",
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
