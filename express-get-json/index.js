const express = require('express');
const app = express();

const arrayObj = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Jason Gonzales',
    course: 'learningFuze',
    grade: 1000
  }
];

app.get('/api/grades', function (req, res) {
  res.json(arrayObj);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
