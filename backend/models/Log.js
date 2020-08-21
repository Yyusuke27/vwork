const mongoose = require("mongoose");
const History = require("../models/History");

const LogSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: [
        "create",
        "name",
        "description",
        "startDateAt",
        "endDateAt",
        "state",
        "progress",
        "priority",
        "todaysTask",
        "project",
      ],
    },
    oldState: String,
    newState: { type: String, required: true },
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

LogSchema.post("save", async function (log) {
  await History.create({
    type: 0,
    task: log.task,
    log: log._id,
  });
});

module.exports = mongoose.model("Log", LogSchema);
