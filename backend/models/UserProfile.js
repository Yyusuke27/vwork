const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema(
  {
    user: mongoose.Schema.ObjectId,
    workspace: mongoose.Schema.ObjectId,
    position: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProfile", UserProfileSchema);
