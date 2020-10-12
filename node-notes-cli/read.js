/* eslint-disable no-console */
const fs = require('fs');

const read = file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataJson = JSON.parse(data);
    notes(dataJson);
  });
};

module.exports = read;

const notes = data => {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
};
