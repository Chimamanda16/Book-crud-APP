const express = require('express');

const router = express.Router();

const { createAuthor } = require("../controllers/author.controller");

router.get('/create', createAuthor);

module.exports = router;