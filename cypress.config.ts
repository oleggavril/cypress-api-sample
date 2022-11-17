// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


// import { tagify } from 'cypress-tags';

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', tagify(config));
//     },
//   },
// });



const { defineConfig } = require("cypress");
const { tagify } = require('cypress-tags');


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hub.test:4433/',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', tagify(config));
    },
  },
});
