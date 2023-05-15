const Author = require("../models/author.model.js");

// Create and Save a new Author
module.exports.createAuthor = (req, res) => {
    const { author_name, author_age } = req.body;
    const author = new Author({
        author_name,
        author_age,
    });
    try {
        const newAuthor = author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// function addAuthor(req, res){
//     const newAuthor = new Author({
//         author_name: req.body.author_name,
//         author_age: req.body.author_age,
//     });
//     newAuthor.author_books.push(newBook._id);
    
//     newAuthor.save().then((response) => {
//         console.log(response);
//     }).catch((err) =>{
//         console.log(err);
//     });

// }
// module.exports = addAuthor;