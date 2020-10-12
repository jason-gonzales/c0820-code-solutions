const fs = require('fs');

const delete1 = (file, userInput) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataJson = JSON.parse(data);
    delete dataJson.notes[userInput];
    const newData = JSON.stringify(dataJson, null, 2);

    fs.writeFile(file, newData, 'utf8', err => {
      if (err) throw err;
    });
  });
};
module.exports = delete1;
