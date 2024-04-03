// ---------- CHARACTER Controllers ----------
// Packages Imports
require(`dotenv`).config();
const axios = require(`axios`);

// Display all characters
const characterDisplay = async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/characters?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = { characterDisplay };
