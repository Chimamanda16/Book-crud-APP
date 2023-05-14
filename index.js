const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://bookapi:bookapi++@atlascluster.nfj4shb.mongodb.net/")
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log("connected to db & listening on port", 3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
