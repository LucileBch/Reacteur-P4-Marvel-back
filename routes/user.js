// ---------- USER Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// Import middleware
const authentication = require(`../middleware/authentication`);

// Import user controllers
const userCtrl = require(`../controllers/user`);

// ---------- Routes POST ----------
// SignUp
router.post(`/user/signup`, userCtrl.userSignup);

// Login
router.post(`/user/login`, userCtrl.userLogin);

// Export route
module.exports = router;
