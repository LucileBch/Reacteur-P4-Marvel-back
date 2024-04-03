// ---------- CHARACTER Controllers ----------
// Packages Imports
require(`dotenv`).config();
const axios = require(`axios`);

// Display all comics
const comicDisplay = async (req, res) => {
  try {
    // Queries destructuring
    const { title, skip, limit } = req.query;

    const { data } = await axios.get(
      `${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = { comicDisplay };
