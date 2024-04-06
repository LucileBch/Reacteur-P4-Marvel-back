// ---------- CHARACTER Controllers ----------
// Packages Imports
require(`dotenv`).config();
const axios = require(`axios`);

// Models Imports
const CharacterLiked = require(`../models/CharacterLiked`);
const User = require(`../models/User`);

// ---------- Display all characters from API
const charactersDisplay = async (req, res) => {
  try {
    // Queries destructuring
    const { name = "", skip = "0", limit = "100" } = req.query;
    const { data } = await axios.get(
      `${process.env.API_URL}/characters?apiKey=${process.env.API_KEY}&name=${name}&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Save liked characters in DB
const likedCharacters = async (req, res) => {
  try {
    const { name, apiId, picture, description } = req.body;
    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });
    // Excluding condition if:
    //    user not authenticated
    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    //  Test existing Character in DB and if is Owner
    const existingCharacter = await CharacterLiked.findOne({
      apiId,
      owner: userId._id,
    });
    if (existingCharacter) {
      return res.status(401).json({ message: `Already registered !` });
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
    res.status(201).json({ message: `Character added to favorite !` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Display characters liked from DB
const likedCharactersDisplay = async (req, res) => {
  try {
    // Finding user with token
    const userId = await User.findOne({ token: req.user.token });
    // Excluding condition if:
    //    user not authenticated
    if (!userId) {
      return res.status(401).json({ message: `Unauthorized` });
    }

    const charactersToDisplay = await CharacterLiked.find({
      owner: userId._id,
    });

    return res.status(200).json({ charactersToDisplay });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- Dislike characters
const dislikedCharacter = async (req, res) => {
  try {
    const characterLikedToDelete = await CharacterLiked.findByIdAndDelete(
      req.params.id
    );
    res.status(202).json({ message: `This character has been deleted !` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  charactersDisplay,
  likedCharacters,
  likedCharactersDisplay,
  dislikedCharacter,
};
