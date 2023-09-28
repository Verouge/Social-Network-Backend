const express = require("express");
const router = express.Router();
const Thought = require("../models/Thought");
const User = require("../models/User");

// GET all thoughts
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
