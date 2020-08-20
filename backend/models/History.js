const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    type: {
      type: Number,
      // 0 = log, 1 = comment
      enum: [0, 1],
      required: true,
    },
    task: {
      type: mongoose.Schema.ObjectId,
      ref: "Task",
      required: true,
    },
    comment: {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
    log: {
      type: mongoose.Schema.ObjectId,
      ref: "Log",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("History", HistorySchema);
