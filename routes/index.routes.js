const express = require('express');
const router = express.Router();

const bookRouter = require("./book.routes");
const authorRouter = require("./author.routes")

router.use("/books", bookRouter);
router.use("/author", authorRouter);

module.exports = router;