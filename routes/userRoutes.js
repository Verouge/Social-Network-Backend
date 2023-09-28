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

// GET a single user by its _id and populated thought and friend data
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("thoughts")
      .populate("friends");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
