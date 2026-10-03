const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  allowCypressEnv: true,  
  watchForFileChanges: false,
  // To prevent Cypress from automatically adding environment variables to the Cypress.env object, 
  // which can help improve security and reduce the risk of accidentally exposing sensitive information.

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  // create the enviornment as key and value, and use in page class
  env: {
      URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
      apiKey: process.env.CYPRESS_WEATHER_API_TOKEN,
      Username: process.env.CYPRESS_USERNAME,
      Password: process.env.CYPRESS_PASSWORD
    },
    
});
