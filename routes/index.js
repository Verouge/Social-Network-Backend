const express = require("express");
const router = express.Router();

// Import the individual route files
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// Use them as middleware under specific paths
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
