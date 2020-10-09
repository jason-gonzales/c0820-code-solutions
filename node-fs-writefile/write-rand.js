/* eslint-disable no-console */
const fs = require('fs');
const data = Math.random();

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  console.log('The file is saved');
});
