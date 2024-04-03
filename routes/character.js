// ---------- CHARACTER Routing ----------
// Packages Imports
require(`dotenv`).config();
const express = require(`express`);
const router = express.Router();
const axios = require(`axios`);

// ---------- Routes GET ----------
// Get All Characters
router.get(`/characters`, async (req, res) => {
  try {
    const datas = await axios.get(
      `${process.env.API_URL}/characters?apiKey=${process.env.API_KEY}`
    );

    console.log(datas.data);
    res.status(200).json(datas.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export route
module.exports = router;
