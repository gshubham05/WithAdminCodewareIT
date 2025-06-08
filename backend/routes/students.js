const express = require("express");
const Student = require("../models/Student");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    // Create a new student with contact form data
    const newStudent = new Student({
      name,
      email,
      phone,
      // If your Student model doesn't have message field,
      // you can add it OR store message in some other field.
      message,
    });
    await newStudent.save();
    res.status(201).json({ message: "Student created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
