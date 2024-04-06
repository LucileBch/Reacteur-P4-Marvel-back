// ---------- CHARACTER Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Middleware Imports
const authentication = require(`../middleware/authentication`);

// Controllers Imports
const characterCtrl = require(`../controllers/character`);

// ---------- API LOGIC :
// ---------- Routes GET ----------
// Display all characters from API
router.get(`/characters`, characterCtrl.charactersDisplay);

// ---------- DB LOGIC :
// ---------- Routes POST ----------
// Register new character liked in DB
router.post(`/liked-characters`, authentication, characterCtrl.likedCharacters);

// Display all characters liked from DB
router.get(
  `/characters/like`,
  authentication,
  characterCtrl.likedCharactersDisplay
);

// ---------- Routes DELETE ----------
// Dislike character
router.delete(`/characters/dislike/:id`, characterCtrl.dislikedCharacter);

// Export route
module.exports = router;
