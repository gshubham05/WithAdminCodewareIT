const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");
const parser = require("../middleware/upload"); // multer middleware for Cloudinary image upload
const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// Get single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Create blog with image upload (auth required)
router.post("/", auth, parser.single("image"), async (req, res) => {
  try {
    const { title, description, content, date, readTime, category } = req.body;

    const imageUrl = req.file ? req.file.path : "";

    const blog = new Blog({
      title,
      description,
      content,
      date,
      readTime,
      category,
      image: imageUrl,
    });

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// Update blog with optional image (auth required)
router.put("/:id", auth, parser.single("image"), async (req, res) => {
  try {
    const { title, description, content, date, readTime, category } = req.body;

    const updateData = {
      title,
      description,
      content,
      date,
      readTime,
      category,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// Delete blog (auth required)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

module.exports = router;
