//book model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema({
  book_title: {
    type: String,
    required: true,
  },
  book_author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  book_description: {
    type: String,
    required: false,
  },
  book_year_published: {
    type: String,
    required: true,
  },
  book_genre: {
    type: String,
    required: true,
  },
  book_isbn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", Book);
