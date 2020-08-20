const mongoose = require("mongoose");
const History = require("../models/History");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: mongoose.Schema.ObjectId,
      ref: "Task",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

CommentSchema.post("save", async function (comment) {
  await History.create({
    type: 1,
    task: comment.task,
    comment: comment._id,
  });
});

module.exports = mongoose.model("Comment", CommentSchema);
