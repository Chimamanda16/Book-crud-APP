const Book = require("../models/book.model.js");

module.exports.createBook = (req, res) => {
    const { book_title, book_author, book_description, book_year_published, book_genre, book_isbn } = req.body;
    const book = new Book({
        book_title,
        book_author,
        book_description,
        book_year_published,
        book_genre,
        book_isbn
    });
    try {
        book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
};
};
