// ---------- COMIC LIKED Model ----------
// Packages Imports
const mongoose = require(`mongoose`);

// Schema structure
const comicLikedSchema = mongoose.Schema({
  title: { type: String, required: true },
  apiId: { type: String, required: true },
  picture: { type: String },
  description: { type: String },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `User`,
  },
});

// Export model
module.exports = mongoose.model(`comicLiked`, comicLikedSchema);
