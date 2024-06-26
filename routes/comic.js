// ---------- COMICS Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Middleware Imports
const authentication = require(`../middleware/authentication`);

// Controllers Imports
const comicsCtrl = require(`../controllers/comic`);

// ---------- API LOGIC :
// ---------- Routes GET ----------
// Get all comics
router.get(`/comics`, comicsCtrl.comicsDisplay);

// Get comics according to character Id
router.get(`/comics/:characterId`, comicsCtrl.comicsByCharacterId);

// ---------- DB LOGIC :
// ---------- Routes POST ----------
// Register new comic liked in DB
router.post(`/comic/like`, authentication, comicsCtrl.likedComics);

// Display all comics liked from DB
router.get(`/liked-comics`, authentication, comicsCtrl.likedComicsDisplay);

// ---------- Routes DELETE ----------
// Dislike comic
router.delete(`/comics/dislike/:id`, comicsCtrl.dislikedComic);

// Export routes
module.exports = router;
