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
    "URLLogin": "https://identity.telerik.com/login?client_id=http:%2F%2Fwww.lean.telerik.com&redirect_uri=https:%2F%2Fwww.telerik.com%2Ftracking%2Flogin%3Fredirect_uri%3Dhttps%253a%252f%252fwww.telerik.com%252faccount%252f&response_type=code&state=187C200A59CA32EDCC9E4A99F73773E951EC4894DA638020494D417C23C8AE7E",
    "User": "chanchaifwork@gmail.com",
    "Pass": "Password123",
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
