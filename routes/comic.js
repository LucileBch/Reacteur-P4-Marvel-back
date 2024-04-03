// ---------- COMICS Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Controllers Imports
const comicCtrl = require(`../controllers/comic`);

// ---------- Routes GET ----------
// Get All Comics
router.get(`/comics`, comicCtrl.comicDisplay);

// Export route
module.exports = router;
