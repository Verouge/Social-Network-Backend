const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb://localhost:27017/social_media_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Middleware to parse incoming JSON data
app.use(express.json());

// Use the consolidated routes from the 'routes' directory
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
