// ---------- USER Model ----------
// Packages Imports
const mongoose = require(`mongoose`);

// Schema structure
const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  token: { type: String, required: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
});

// Export model
module.exports = mongoose.model(`User`, userSchema);
