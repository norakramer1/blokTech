const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const mongoDB= require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config()
const assert = require('assert');
const favBook = require ('./models/boeken');

const port = 3000;
const path = require('path');
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.then((result) => console.log('connected!'))
.catch ((err) => console.log('error'));



// express and view engine //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/static', express.static(path.join(__dirname, 'static')));


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.get('/', async (req, res) => {
//    const findBook = await favBook.find();
//    res.render('partials/profielen', { findBook: favBook });
//    console.log(findBook)
//  });


app.post('/profiel', async (req, res) => {
       const findBook = await favBook.find ({
           book1: req.body.book1,
           book2: req.body.book2,
           book3: req.body.book3,

      });


       res.render('partials/profielen', { favBooks: findBook });
       // console.log(findBook)


  });






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

// app.post('/profiel', (req, res) =>{
// console.log(req.body);
// });



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });
