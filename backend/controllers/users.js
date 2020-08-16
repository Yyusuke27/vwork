const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Users = require("../models/User");
const UserProfile = require("../models/UserProfile");
const Project = require("../models/Project");
const Task = require("../models/Task");

// @desc Update user
// @route PUT /api/v1/users/:id
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const isThisUser = req.params.id === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isThisUser && !isAdmin) {
    return next(new ErrorResponse("ユーザー情報の更新権限がありません"));
  }

  const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc Update user
// @route PUT /api/v1/workspaces/:workspaceId/users/:id/profile
// @access Private
exports.updateUserAndProfile = asyncHandler(async (req, res, next) => {
  const isThisUser = req.params.id === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isThisUser && !isAdmin) {
    return next(new ErrorResponse("ユーザー情報の更新権限がありません"));
  }

  const updateUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const updateProfileData = {
    position: req.body.position,
  };

  const user = await Users.findByIdAndUpdate(req.params.id, updateUserData, {
    new: true,
    runValidators: true,
  });

  let profile = await UserProfile.findOne({
    user: req.params.id,
    workspace: req.params.workspaceId,
  });
  if (!profile) {
    profile = await UserProfile.create({
      user: req.params.id,
      workspace: req.params.workspaceId,
      position: req.body.position,
    });
  } else {
    profile.position = req.body.position;
    await profile.save();
  }

  res.status(200).json({
    success: true,
    data: user,
    profile,
  });
});

// @desc Get Project member
// @route GET /api/v1/workspaces/:workspaceId/projects/:projectId/users/:id
// @access Public
exports.getProjectUser = asyncHandler(async (req, res, next) => {
  const isAdmin = req.user.role === "admin";
  let user, tasks, profile;

  if (req.params.projectId) {
    // プロジェクトのメンバーのみ閲覧可能
    const project = await Project.findById(req.params.projectId);

    if (!project) {
      return next(new ErrorResponse("プロジェクトが存在しません", 404));
    }

    let IsMemberInProject = project.members.includes(req.user.id);

    if (!IsMemberInProject && !isAdmin) {
      return next(new ErrorResponse("プロジェクトの閲覧権限がありません"));
    }

    user = await Users.findOne({ _id: req.params.id });

    IsMemberInProject = project.members.includes(user.id);

    if (!IsMemberInProject) {
      return next(
        new ErrorResponse("プロジェクトのメンバーではないため閲覧できません")
      );
    }

    profile = await UserProfile.findOne({
      user: user.id,
      workspace: req.params.workspaceId,
    });

    tasks = await Task.find({
      user: req.params.id,
      project: req.params.projectId,
    })
      .populate({
        path: "project",
        select: "name",
      })
      .populate({
        path: "user",
        select: "name",
      })
      .sort({
        updatedAt: -1,
      });
  }

  res.status(200).json({
    success: true,
    user,
    tasks,
    profile,
  });
});
