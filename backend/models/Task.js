const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "タスク名を入力してください"],
    },
    description: String,
    startDateAt: Date,
    endDateAt: Date,
    state: {
      type: Number,
      enum: [0, 1, 2],
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
    },
    priority: {
      type: Number,
      enum: [0, 1, 2],
    },
    todaysTask: Boolean,
    project: { type: mongoose.Schema.ObjectId, null: true, ref: "Project" },
    workspace: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
