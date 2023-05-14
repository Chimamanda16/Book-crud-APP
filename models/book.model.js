//book model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema({
  book_title: {
    type: String,
  },
  book_author: {
    type: String,
  },
  book_description: {
    type: String,
  },
  book_year_published: {
    type: String,
  },
  book_genre: {
    type: String,
  },
  book_isbn: {
    type: String,
  },
});

module.exports = mongoose.model("Book", Book);
