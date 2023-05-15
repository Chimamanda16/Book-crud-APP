const express = require("express");
const bookRouter = express.Router();
const { createBook } = require("../controllers/book.controller");

bookRouter.post("/create", createBook);

module.exports = bookRouter;
