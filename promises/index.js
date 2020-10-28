/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');
const name = takeAChance('Jason');

name.then(message => {
  console.log(message);
}, reason => {
  console.log(reason.message);
});
