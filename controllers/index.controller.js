//index controller
const app = require("../index.js");
const express = require('express');
const Author = require("../models/author.model.js");
const Book = require("../models/book.model.js");
app.use(express.urlencoded({extended: true}));

function createBook(req, res){
    const newAuthor = new Author({
        author_name: req.body.author_name,
          author_age: req.body.author_age,
    });
    const newBook = new Book({
        book_title: req.body.book_title,
        book_author: newAuthor._id,
        book_description: req.body.book_description,
        book_year_published: req.body.book_year_published,
        book_genre: req.body.book_genre,
        book_isbn: req.body.book_isbn,
    });
    newAuthor.author_books.push(newBook._id);

    newBook.save().then((response) => {
        res.send("Added successfully!");
        console.log(response);
    }).catch((err) =>{
        console.log(err);
    });
    newAuthor.save().then((response) => {
        // res.send("Added successfully!");
        console.log(response);
    }).catch((err) =>{
        console.log(err);
    });
    
}

module.exports = createBook;