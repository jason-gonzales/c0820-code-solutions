const express = require('express');
const app = express();

const grades = [
  {
    id: 2,
    name: 'Jason',
    course: 'web development',
    grade: 100
  },
  {
    id: 1,
    name: 'Kobe',
    course: 'basketball',
    grade: 81
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  // eslint-disable-next-line no-console
  const id = parseInt(req.params.id);

  for (let i = 0; i < grades.length; i++) {
    if (id === grades[i].id) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
