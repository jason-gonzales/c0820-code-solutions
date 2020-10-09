/* eslint-disable no-console */
const fs = require('fs');
const file = process.argv[2];

fs.writeFile('note.txt', file, err => {
  if (err) {
    console.log(err);
  }
  console.log(file);
});
