
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book1: {
    type: String,
    required: true
  },
  book2: {
    type: String,
    required: true
  },
  book3: {
    type: String,
    required: true
  }
});

const favBook = mongoose.model('favBook', bookSchema);
module.exports = favBook;
