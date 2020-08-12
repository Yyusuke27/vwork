const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
    workspace: {
      type: mongoose.Schema.ObjectId,
      ref: "Workspace",
      required: true,
    },
    tasks: [{ type: mongoose.Schema.ObjectId, ref: "Task" }],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    comment: String,
    startedAt: Date,
    endedAt: Date,
    restStartedAt: Date,
    restEndedAt: Date,
    totalWorkTime: Number,
    totalRestTime: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attendance", AttendanceSchema);
