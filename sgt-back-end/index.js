// eslint-disable-next-line no-console
const pg = require('pg');
const express = require('express');
const app = express();

const middleWare = express.json();
app.use(middleWare);

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  if (!Number.isInteger(body.grade) || body.grade <= 0) {
    return res.status(400).json({
      error: 'invalid grade'
    });
  }

  const sql = `
 insert into "grades" ("name","course","grade")
 values ($1, $2, $3)
 returning *
 `;
  const values = [body.name, body.course, body.grade];

  db.query(sql, values)
    .then(result =>
      res.status(201).json(result.rows[0]))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const body = req.body;
  const gradeId = parseInt(req.params.gradeId, 10);

  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: `${gradeId} must be a positive integer`
    });
    return;
  }
  if (!body.grade || body.grade < 0) {
    res.status(400).json({
      error: 'invalid grade'
    });
    return;
  }

  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "grade" = $3
  where "gradeId" = $4
  returning *
  `;

  const values = [body.name, body.course, body.grade, gradeId];
  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: 'target grade may not exist'
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `${gradeId} is an invalid gradeId`
    });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'The grade cant be found'
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
