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
    owners: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// virtual設定
WorkspaceSchema.virtual("projects", {
  ref: "Project",
  localField: "_id",
  foreignField: "workspace",
  justOne: false,
});

// TODO: userと関連付ける
// TODO: 削除時にProjectとそれ以下のデータ全て消えるようする

module.exports = mongoose.model("Workspace", WorkspaceSchema);
