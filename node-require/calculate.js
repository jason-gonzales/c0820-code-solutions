/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./substract');
const multiply = require('./multiply');
const divide = require('./divide');

const math = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (math === 'plus') {
  console.log(`result: ${add(num1, num2)}`);
} else if (math === 'minus') {
  console.log(`result: ${subtract(num1, num2)}`);
} else if (math === 'times') {
  console.log(`result: ${multiply(num1, num2)}`);
} else if (math === 'over') {
  console.log(`result: ${divide(num1, num2)}`);
}
