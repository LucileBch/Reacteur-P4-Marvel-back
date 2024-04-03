// ---------- COMICS Routing ----------
require(`dotenv`).config();
const axios = require(`axios`);
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Controllers Imports
const comicsCtrl = require(`../controllers/comic`);

// ---------- Routes GET ----------
// Get All Comics
router.get(`/comics`, comicsCtrl.comicsDisplay);

// Get Comics according to character Id
router.get(`/comics/:characterId`, comicsCtrl.comicsByCharacterId);

// Export route
module.exports = router;
