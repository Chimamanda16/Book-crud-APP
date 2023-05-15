//index route
// Path: routes\index.routes.js
const express = require('express');
const router = express.Router();
const Book = require("../models/book.model.js");

router.get('/', (req, res) => {
    console.log('Connecting');
    Book.find().then((response) =>{
        res.send(response);
    }); 
});

module.exports = router;