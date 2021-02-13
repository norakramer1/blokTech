const _ = require('lodash');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
  res.send('about')
});

app.get('/login', (req, res) => {
  res.send('login')
});

app.get("*", (req, res) => {
  res.send('404 Not Found sorry!')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${3000}!`)
});
