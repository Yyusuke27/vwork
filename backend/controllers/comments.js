const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Comment = require("../models/Comment");
const Task = require("../models/Task");
const Workspace = require("../models/Workspace");
const Notification = require("../models/Notification");
const User = require("../models/User");

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

  // タスクのユーザーとリクエストのユーザーが違う場合は
  // 通知処理
  if (task.user.toString() !== req.user.id) {
    await Notification.create({
      type: 1,
      user: task.user,
      task: task._id,
      unread: true,
    });

    await User.findByIdAndUpdate(
      task.user,
      {
        unread: true,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  res.status(201).json({
    success: true,
    data: comment,
  });
});
