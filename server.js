const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const assert = require('assert');
const favBook = require('./models/boeken');

const port = process.env.PORT || 3000;
const path = require('path');
app.use(express.urlencoded({
  extended: true
}));


mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => app.listen(port))
  .then((result) => console.log('connected!'))
  .catch((err) => console.log('error'));



// express and view engine //
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views'));

app.use('/static', express.static(path.join(__dirname, 'static')));


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// finds matching account based on form input and adds account to db
app.post('/profiel', async (req, res) => {
  const findBook = await favBook.find({
    book1: req.body.book1,
    book2: req.body.book2,
    book3: req.body.book3,

  });
  const addBook = await new favBook({
    book1: req.body.book1,
    book2: req.body.book2,
    book3: req.body.book3,

  });
  addBook.save(function(err) {
    if (err) {
      console.log(err)
    } else {
      res.render('matches', {
        findBook: findBook
      })

    }
  });
});



// routes
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/matches', (req, res) => {
  res.render('matches')

});

app.get('/profiel', (req, res) => {
  res.render('profiel')
});

app.get("*", (req, res) => {
  res.send('404 Not Found sorry!')
});
