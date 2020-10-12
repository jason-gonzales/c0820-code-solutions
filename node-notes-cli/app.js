/* eslint-disable no-console */
const read = require('./read');
const create = require('./create');
const delete1 = require('./delete');
const update = require('./update');

const file = 'data.json';
const operation = process.argv[2];
const userInput = process.argv[3];
const userId = process.argv[3];
const userUpdate = process.argv[4];

if (operation === 'read') {
  read(file);
} else if (operation === 'create') {
  create(file, userInput);
} else if (operation === 'delete') {
  delete1(file, userInput);
} else if (operation === 'update') {
  update(file, userId, userUpdate);
}
