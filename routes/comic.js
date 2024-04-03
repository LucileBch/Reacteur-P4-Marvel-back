// ---------- COMICS Routing ----------
// Packages Imports
require(`dotenv`).config();
const express = require(`express`);
const router = express.Router();
const axios = require(`axios`);

// ---------- Routes GET ----------
// Get All Chomics
router.get(`/comics`, async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}`
    );

    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export route
module.exports = router;
