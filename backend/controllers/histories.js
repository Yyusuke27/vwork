const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const History = require("../models/History");
const Comment = require("../models/Comment");

// @desc Create new comment
// @route Get /api/v1/tasks/:taskId/histories
exports.getHistories = asyncHandler(async (req, res, next) => {
  const histories = await History.find({ task: req.params.taskId })
    .populate({
      path: "log",
      populate: { path: "user", select: "name" },
    })
    .populate({
      path: "comment",
      populate: { path: "user", select: "name" },
    });

  res.status(200).json({
    success: true,
    data: histories,
  });
});
