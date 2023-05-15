//index controller
const app = require("../index.js");
const express = require('express');
app.use(express.urlencoded({extended: true}));


function createBook(){
    console.log("Workinnngggg!!!");
}
module.exports = createBook;