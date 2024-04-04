// ---------- LIKED Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Import middleware
const authentication = require(`../middleware/authentication`);

// Import models
const CharacterLiked = require(`../models/CharacterLiked`);
const ComicLiked = require(`../models/ComicLiked`);
const User = require(`../models/User`);

// ---------- Routes POST ----------
// Create new character liked
router.post(`/character/like`, authentication, async (req, res) => {
  try {
    const { name, apiId, picture, description } = req.body;

    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });

    // Excluding condition if:
    //    user not authenticated

    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    //    test existing in DB
    const existingCharacter = await CharacterLiked.findOne({ apiId });
    if (existingCharacter) {
      return res.status(400).json({ message: `Already in database` });
    }

    // create new instance
    const newCharacterLiked = new CharacterLiked({
      name,
      apiId,
      picture,
      description,
      owner: userId.id,
    });

    await newCharacterLiked.save();
    res.status(200).json({ message: "Character added to favorite!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new COMIC liked
router.post(`/comic/like`, authentication, async (req, res) => {
  try {
    const { title, apiId, picture, description } = req.body;

    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });

    // Excluding condition if:
    //    user not authenticated

    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    //    test existing in DB
    const existingComic = await ComicLiked.findOne({ apiId });
    if (existingComic) {
      return res.status(400).json({ message: `Already in database` });
    }

    // create new instance
    const newComicLiked = new ComicLiked({
      title,
      apiId,
      picture,
      description,
      owner: userId.id,
    });

    await newComicLiked.save();
    res.status(200).json({ message: "Comic added to favorite!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------- Routes GET ----------
router.get(`/characters/like`, async (req, res) => {
  try {
    const charactersToDisplay = await CharacterLiked.find();
    return res.status(200).json({ charactersToDisplay });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------- Routes GET COMIC ----------
router.get(`/comics/like`, async (req, res) => {
  try {
    const comicsToDisplay = await ComicLiked.find();
    return res.status(200).json({ comicssToDisplay });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------- Routes DELETE ----------
// Delete offer by id
router.delete(`/characters/dislike/:id`, async (req, res) => {
  try {
    const characterLikedToDelete = await CharacterLiked.findByIdAndDelete(
      req.params.id
    );
    res.status(202).json({ message: `This character has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------- Routes DELETE COMIC ----------
// Delete offer by id
router.delete(`/comics/dislike/:id`, async (req, res) => {
  try {
    const comicsLikedToDelete = await ComicLiked.findByIdAndDelete(
      req.params.id
    );
    res.status(202).json({ message: `This comic has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export route
module.exports = router;
