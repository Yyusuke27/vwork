const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    workspace: {
      type: mongoose.Schema.ObjectId,
      ref: "Workspace",
      required: true,
    },
    position: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProfile", UserProfileSchema);
