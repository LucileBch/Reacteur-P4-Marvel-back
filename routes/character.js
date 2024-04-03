// ---------- CHARACTER Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Controllers Imports
const characterCtrl = require(`../controllers/character`);

// ---------- Routes GET ----------
// Get All Characters
router.get(`/characters`, characterCtrl.characterDisplay);

// Export route
module.exports = router;
