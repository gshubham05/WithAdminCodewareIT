const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: String,
  date: String,
  readTime: String,
  category: String,
});

module.exports = mongoose.model("Blog", blogSchema);
