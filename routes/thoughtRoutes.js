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

// GET a single thought by its _id
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST to create a new thought
router.post("/", async (req, res) => {
  const thought = new Thought({
    thoughtText: req.body.thoughtText,
    username: req.body.username,
  });

  try {
    const newThought = await thought.save();

    // Push the created thought's _id to the associated user's thoughts array field
    const user = await User.findById(req.body.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.thoughts.push(newThought._id);
    await user.save();

    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update a thought by its _id
router.put("/:id", async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE to remove a thought by its _id
router.delete("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    await thought.remove();
    res.json({ message: "Thought deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST to create a reaction stored in a single thought's reactions array field
router.post("/:thoughtId/reactions", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: "Thought not found" });

    thought.reactions.push({
      reactionBody: req.body.reactionBody,
      username: req.body.username,
    });

    await thought.save();
    res.json({ message: "Reaction added", reactions: thought.reactions });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
