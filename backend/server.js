const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const bookRoutes = require("./bookRoutes");
app.use("/api/books", bookRoutes);

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(4000, () => console.log("server is running..."));
  })
  .catch((err) => console.log(err));
