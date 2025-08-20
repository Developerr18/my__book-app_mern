const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Book = require("./book.model");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(4000, () => console.log("server is running..."));
  })
  .catch((err) => console.log(err));
