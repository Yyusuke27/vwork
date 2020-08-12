const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "プロジェクト名を入力してください"],
    },
    description: {
      type: String,
      required: [true, "プロジェクト詳細を入力してください"],
    },
    privacy: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Number,
      default: 0,
    },
    icon: {
      type: Number,
      default: 0,
    },
    workspace: {
      type: mongoose.Schema.ObjectId,
      ref: "Workspace",
      required: true,
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

ProjectSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "project",
  justOne: true,
});

module.exports = mongoose.model("Project", ProjectSchema);
