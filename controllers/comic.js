// ---------- COMICS Controllers ----------
// Packages Imports
require(`dotenv`).config();
const axios = require(`axios`);

// Models Imports
const ComicLiked = require(`../models/ComicLiked`);
const User = require(`../models/User`);

// ---------- Display all comics from API
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

// ---------- Display comics with specific character Id from API
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

// ---------- Save liked comics in DB
const likedComics = async (req, res) => {
  try {
    const { title, apiId, picture, description } = req.body;

    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });
    // Excluding condition if:
    //    user not authenticated
    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    //  Test existing Comic in DB and if is Owner
    const existingComic = await ComicLiked.findOne({
      apiId,
      owner: userId._id,
    });
    if (existingComic) {
      return res.status(401).json({ message: `Already registered !` });
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
    res.status(201).json({ message: `Comic added to favorite list !` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Display comics liked from DB
const likedComicsDisplay = async (req, res) => {
  try {
    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });
    // Excluding condition if:
    //    user not authenticated

    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    const comicsToDisplay = await ComicLiked.find({
      owner: userId._id,
    });

    res.status(200).json({ comicsToDisplay });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Dislike comic
const dislikedComic = async (req, res) => {
  try {
    const comicsLikedToDelete = await ComicLiked.findByIdAndDelete(
      req.params.id
    );
    res.status(202).json({ message: `This comic has been deleted !` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  comicsDisplay,
  comicsByCharacterId,
  likedComics,
  likedComicsDisplay,
  dislikedComic,
};
