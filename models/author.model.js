const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Author = new Schema({
  author_name: {
    type: String,
  },
  author_age: {
    type: String,
  },
  author_books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.model("Author", Author);
