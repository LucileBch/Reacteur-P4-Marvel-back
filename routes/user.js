// ---------- USER Routing ----------
// Packages Imports
const express = require(`express`);
const router = express.Router();

// User controllers Imports
const userCtrl = require(`../controllers/user`);

// ---------- Routes POST ----------
// SignUp
router.post(`/user/signup`, userCtrl.userSignup);

// Login
router.post(`/user/login`, userCtrl.userLogin);

// Export routes
module.exports = router;
