const setupNodeEvents = require("@synthetixio/synpress/plugins/index");
const { defineConfig } = require('cypress');

const supportFile = 'tests/e2e/support.js';

module.exports = defineConfig({
  userAgent: "synpress",
  retries: { 
    runMode: 0, 
    openMode: 0 
  },
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",
  video: false,
  chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 850,
  e2e: {
    setupNodeEvents,
    baseUrl: "http://localhost:8080",
    specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}',
    supportFile,
  },
  component: {
    setupNodeEvents,
    specPattern: './**/*cy.{js,jsx,ts,tsx}',
    supportFile,
  },
  env: {
    coverage: false
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000
});