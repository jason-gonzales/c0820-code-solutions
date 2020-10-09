/* eslint-disable no-console */
const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.log(err);

  }
  console.log(data);
});
