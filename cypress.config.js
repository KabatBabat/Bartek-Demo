const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
