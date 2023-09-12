// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  testMatch:[
    "tests/*.spec.js"
 ],
 workers: process.env.CI ? 1 : 10,
  timeout: 30*1000, //timeout for overall test
  expect: {
    timeout: 5000 // time out for assertion
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName: 'chromium',
    headless:false

  },

});

