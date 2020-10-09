/* eslint-disable no-console */
const books = [{
  isbn: '12345',
  title: 'Notebook',
  author: 'Nick Sparks'
}, {
  isbn: '23456',
  title: 'Titanic',
  author: 'Leo DiCaprio'
}, {
  isbn: '8124',
  title: 'Champion',
  author: 'Kobe Bryant'
}];

console.log(typeof books);
console.log(JSON.stringify(books));
console.log(typeof JSON.stringify(books));

const string = '{"id":12345, "name": "Jason"}';
console.log(typeof string);
console.log(JSON.parse(string));
console.log(typeof JSON.parse(string));
