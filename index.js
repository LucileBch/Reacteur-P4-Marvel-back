// ---------- APPLICATION ----------
// Packages Imports
require("dotenv").config();
const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);
const morgan = require("morgan");

// Create server
const app = express();

// Enable JSON format and Cross-Origin request
app.use(cors());
app.use(express.json());

// Creating and connecting to database
mongoose.connect(process.env.MONGODB_URI);

// Register logs
app.use(morgan("dev"));

// Routes Imports
const characterRoutes = require(`./routes/character`);
const comicRoutes = require(`./routes/comic`);
const userRoutes = require(`./routes/user`);
app.use(characterRoutes);
app.use(comicRoutes);
app.use(userRoutes);

// ---------- Routes ALL ----------
// Welcome Route
app.get(`/`, (req, res) => {
  res.status(200).json({ message: `Welcome to my Marvel server` });
});

//Exclude non existing paths
app.all(`*`, (req, res) => {
  res.status(404).json({ message: `This route does not exist` });
});

// Listening on :
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started 🚀`);
});
