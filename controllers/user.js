// ---------- USER Controllers ----------
// Packages Imports
const SHA256 = require("crypto-js/sha256");
const encBase64 = require(`crypto-js/enc-base64`);
const uid2 = require("uid2");

// Utils Imports
const convertToBase64 = require(`../utils/convertToBase64`);

// Import models
const User = require(`../models/User`);

// ---------- POST ----------
// Signup
const userSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Excluding condition if:
    //      email already exists
    //      email, username or password is missing
    const emailToCheck = await User.findOne({ email });
    if (emailToCheck) {
      return res.status(400).json({ message: `This email already exists` });
    }

    if (!username || !email || !password) {
      return res.status(401).json({
        message: `Please make sure to fill the fields email, username and password`,
      });
    }

    // Encrypting password
    const saltPassword = uid2(16);
    const hashPassword = SHA256(password + saltPassword).toString(encBase64);
    const token = uid2(32);

    // Create new User
    const newUser = new User({
      email: email,
      username: username,
      token: token,
      hash: hashPassword,
      salt: saltPassword,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser.id,
      token: newUser.token,
      username: username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
const userLogin = async (req, res) => {
  try {
    // Excluding condition if email field is empty
    if (!req.body.email) {
      return res
        .status(400)
        .json({ message: `Please enter your email adress!` });
    }

    // Excluding condition if email is incorrect
    const userToFind = await User.findOne({ email: req.body.email });
    if (!userToFind) {
      return res.status(400).json({ message: `Email or password incorrect` });
    }

    // Testing password correspondance
    const hashToCheck = SHA256(req.body.password + userToFind.salt).toString(
      encBase64
    );

    if (hashToCheck === userToFind.hash) {
      res.status(202).json({
        _id: userToFind.id,
        token: userToFind.token,
        username: userToFind.username,
      });
    } else {
      res.status(401).json({ message: `Email or password incorrect` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = { userSignup, userLogin };
