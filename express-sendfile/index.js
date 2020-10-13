const express = require('express');

const app = express();

app.use((req, res, next) => {
  const options = { root: __dirname };
  const fileName = req.path;

  if (req.originalUrl) {
    res.sendFile(fileName, options);
  } else {
    next();
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
