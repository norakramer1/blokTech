const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const mongoDB= require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config()
var assert = require('assert');


// mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connect = async (mongoose) => {
  try {
    await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
  console.log('connected')

} catch (err){
    console.log('failed')
  }
};



// const Cat = mongoose.model('Cat', { name: String });
//
//
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
//
//
//
//
//
// app.post('/profiel', (req, res) =>{
//   favBoeken.insertOne, ('Harry Potter')
// })

 // mongoDB.MongoClient.connect(uri, function (err, client) {
 //   db = client.db("test")
 //   favBoeken = db.collection('favBoeken');
 //   assert.equal(null, err);
 //   client.close();
 // });



 // MongoClient.connect(uri, function(err, db) {
 //   if (err) {
 //     throw err;
 //   }
 //   db.collection('favBoeken').find().toArray(function(err, result) {
 //     if (err) {
 //       throw err;
 //     }
 //     console.log(result);
 //   });
 // });
 //



 //
 // function boeken (req, res, next) {
 //   db.collection('favBoeken').find().toArray(done)
 //
 //   function done(err, data) {
 //     if (err) {
 //       next (err)
 //     } else {
 //       res.send({data:data});
 //       console.log({data:data});
 //
 //     }
 //   }
 // }

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
