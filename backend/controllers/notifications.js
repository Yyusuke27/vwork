const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Notification = require("../models/Notification");

// @desc Get all notifications
// @route Get /api/v1/workspaces/:workspaceId/notifications
exports.getNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({
    workspace: req.params.workspaceId,
    user: req.user.id,
  }).populate({
    path: "task",
    populate: { path: "project", select: "name" },
  });

  res.status(200).json({
    success: true,
    data: notifications,
  });
});

// @desc Update notification
// @route PUT /api/v1/workspaces/:workspaceId/notifications/:id
exports.updateNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のNotificationはありません。`, 404)
    );
  }

  await notification.updateOne(req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
  });
});
