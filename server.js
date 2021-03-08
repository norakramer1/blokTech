const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoDB= require('mongodb');
require('dotenv').config()
var assert = require('assert');

const uri = process.env.DB_URI;
var db = null
let favBoeken;

app.post('/profiel', (req, res) =>{
  favBoeken.insertOne, ('Harry Potter')
})

 mongoDB.MongoClient.connect(uri, function (err, client) {
   db = client.db("test")
   favBoeken = db.collection('favBoeken');
   assert.equal(null, err);
   client.close();
 });


const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));



// view engine //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/static', express.static(path.join(__dirname, 'static')))




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

app.post('/profiel', (req, res) =>{
console.log(req.body);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
