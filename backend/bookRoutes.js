const express = require("express");
const router = express.Router();
const Book = require("./book.model");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post("/", async (req, res) => {
  const { title = "Harry Potter", author = "Jack Lee" } = req.body || {};
  const newBook = await Book.create({ title, author });
  res.json(newBook);
});

router.delete("/:id", async (req, res) => {});

module.exports = router;
