// eslint-disable-next-line no-console
const express = require('express');
const app = express();
const fs = require('fs');

const jsonData = require('./data.json');
const notes = Object.values(jsonData.notes);

const middleWare = express.json();
app.use(middleWare);

app.get('/api/notes', (req, res) => {

  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  // eslint-disable-next-line no-console
  const id = parseInt(req.params.id, 10);
  if (id < 1 || !id || !Number.isInteger(id)) {
    res.status(400).json({ error: 'user needs to put a positive number' });
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      res.status(200).json(notes[i]);
      return;
    }
  }
  res.status(404).json({ error: `cannot find note with id: ${id}` });
});

app.post('/api/notes', (req, res) => {
  // eslint-disable-next-line no-console
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  req.body.id = jsonData.nextId;
  jsonData.notes[jsonData.nextId] = req.body;
  jsonData.notes[jsonData.nextId].id = jsonData.nextId;
  jsonData.nextId++;

  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', dataString, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
      return;
    }
    res.status(201).json(req.body);
  });

});

app.delete('/api/notes/:id', (req, res) => {
  // eslint-disable-next-line no-console
  const id = parseInt(req.params.id, 10);
  if (id < 1 || !id || !Number.isInteger(id)) {
    res.status(400).json({ error: 'user needs to put a positive number' });
    return;
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is required' });
  }
  if (jsonData.notes[id] !== undefined) {
    delete jsonData.notes[id];
    const dataString = JSON.stringify(jsonData, null, 2);

    fs.writeFile('data.json', dataString, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
  res.status(404).json({ error: `cannot find note with id ${id}` });

});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (id < 1 || !id || !Number.isInteger(id)) {
    res.status(400).json({ error: 'user needs to put a positive number' });
    return;
  }

  if (Object.keys(req.body).length === 0) {
    res.status(404).json({ error: 'content is a required field' });
    return;
  }

  if (jsonData.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }

  jsonData.notes[id].content = req.body.content;

  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', dataString, 'utf8', err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
    res.status(200).json(jsonData.notes[id]);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
