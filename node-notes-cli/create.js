/* eslint-disable no-console */
const fs = require('fs');

const create = (file, userInput) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataJson = JSON.parse(data);
    dataJson.notes[dataJson.nextId] = userInput;
    dataJson.nextId++;
    const newData = JSON.stringify(dataJson, null, 2);

    fs.writeFile(file, newData, 'utf8', err => {
      if (err) throw err;
    });

  });
};

module.exports = create;
