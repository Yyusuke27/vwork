const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Comment = require("../models/Comment");
const Task = require("../models/Task");
const Workspace = require("../models/Workspace");

// @desc Create new comment
// @route POST /api/v1/tasks/:taskId/comments
exports.createComment = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.taskId);
  if (!task) {
    return next(
      new ErrorResponse(`ID:${req.params.taskId}のタスクはありません`, 404)
    );
  }

  // ワークスペースのメンバーしかコメントできない
  const workspace = await Workspace.findById(task.workspace);
  const isMemberInWorkspace = workspace.members.includes(req.user.id);

  if (!isMemberInWorkspace) {
    return next(new ErrorResponse("コメント権限がありません"));
  }

  const comment = await Comment.create({
    user: req.user.id,
    task: req.params.taskId,
    comment: req.body.comment,
  });

  res.status(201).json({
    success: true,
    data: comment,
  });
});
