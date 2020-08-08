const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
    workspace: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    tasks: [mongoose.Schema.ObjectId],
    user: {
      type: mongoose.Schema.ObjectId,
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
