const fs = require('fs');

const update = (file, userId, userUpdate) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataJson = JSON.parse(data);
    dataJson.notes[userId] = userUpdate;
    const newData = JSON.stringify(dataJson, null, 2);

    fs.writeFile(file, newData, 'utf8', err => {
      if (err) throw err;
    });
  });
};

module.exports = update;
