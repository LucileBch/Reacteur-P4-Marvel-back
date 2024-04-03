// ---------- COMICS Controllers ----------
// Packages Imports
require(`dotenv`).config();
const axios = require(`axios`);

// Display all comics
const comicsDisplay = async (req, res) => {
  try {
    // Queries destructuring
    const { title = "", skip = "", limit = "" } = req.query;

    const { data } = await axios.get(
      `${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Display Comiccs with specific character Id
const comicsByCharacterId = async (req, res) => {
  try {
    // Params destructuring
    const { characterId } = req.params;

    const { data } = await axios.get(
      `${process.env.API_URL}/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = { comicsDisplay, comicsByCharacterId };
