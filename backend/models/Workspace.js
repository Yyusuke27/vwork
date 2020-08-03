const mongoose = require("mongoose");

const WorkspaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "名前を設定してください。"],
    },
    active: {
      type: Boolean,
      default: false,
    },
    member: [
      {
        user: String,
        role: {
          type: String,
          enum: ["normal", "owner"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// TODO: userと関連付ける

module.exports = mongoose.model("Workspace", WorkspaceSchema);
