const express = require("express");
const router = express.Router();
const Book = require("./book.model");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.post("/", async (req, res) => {
  const { title = "Harry Potter", author = "Jack Lee" } = req.body || {};
  const newBook = await Book.create({ title, author });
  res.send(newBook);
});

module.exports = router;
