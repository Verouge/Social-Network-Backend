const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Thought = require("../models/Thought");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("thoughts").populate("friends");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
