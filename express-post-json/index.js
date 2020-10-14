const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

const files = express.json();
app.use(files);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {

  res.status(201).send(grades);
  req.body.id = nextId;
  grades.push(req.body);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
