const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Author = new Schema({
  author_name: {
    type: String,
    required: true,
  },
  author_age: {
    type: Number,
    required: false,
  },
  author_books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.model("Author", Author);
