const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    type: {
      type: Number,
      // 0 = log, 1 = comment
      enum: [0, 1],
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
    unread: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
