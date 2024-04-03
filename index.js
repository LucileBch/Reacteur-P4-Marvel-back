// ---------- APPLICATION ----------
// Packages Imports
// require("dotenv").config();
const express = require(`express`);
const cors = require(`cors`);

// Create server
const app = express();

// Enable JSON format and Cross-Origin request
app.use(cors());
app.use(express.json());

// Importing routes
const characterRoutes = require(`./routes/character`);
app.use(characterRoutes);

// ---------- Routes ALL ----------
// Welcome Route
app.get(`/`, (req, res) => {
  res.status(200).json({ message: `Welcome to my Marvel server` });
});

//Exclude uncorrect paths
app.all(`*`, (req, res) => {
  res.status(404).json({ message: `This route does not exist` });
});

// Listening on :
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started 🚀`);
});
