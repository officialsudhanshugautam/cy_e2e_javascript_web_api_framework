const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,  
  // To prevent Cypress from automatically adding environment variables to the Cypress.env object, 
  // which can help improve security and reduce the risk of accidentally exposing sensitive information.

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    "baseURL": "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  },

});
