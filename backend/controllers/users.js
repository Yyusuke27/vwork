const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const UserProfile = require("../models/UserProfile");
const Project = require("../models/Project");
const Task = require("../models/Task");
const Workspace = require("../models/Workspace");

// @desc Update user
// @route PUT /api/v1/users/:id
exports.updateUser = asyncHandler(async (req, res, next) => {
  const isThisUser = req.params.id === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isThisUser && !isAdmin) {
    return next(new ErrorResponse("ユーザー情報の更新権限がありません"));
  }

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
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

  const user = await User.findByIdAndUpdate(req.params.id, updateUserData, {
    new: true,
    runValidators: true,
  });

  let profile;

  profile = await UserProfile.findOne({
    user: req.params.id,
    workspace: req.params.workspaceId,
  });
  if (!profile) {
    profile = await UserProfile.create({
      user: req.params.id,
      workspace: req.params.workspaceId,
      position: req.body.position,
    });
    user.profiles.push(profile._id);
    await user.save();
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

// @desc Get single user
// @route GET /api/v1/workspaces/:workspaceId/users/:id
// @route GET /api/v1/workspaces/:workspaceId/projects/:projectId/users/:id
exports.getUser = asyncHandler(async (req, res, next) => {
  const isAdmin = req.user.role === "admin";
  let user, tasks, profile;

  if (req.params.workspaceId && req.params.projectId) {
    // プロジェクトのメンバーのみ閲覧可能
    const project = await Project.findById(req.params.projectId);

    if (!project) {
      return next(new ErrorResponse("プロジェクトが存在しません", 404));
    }

    let IsMemberInProject = project.members.includes(req.user.id);

    if (!IsMemberInProject && !isAdmin) {
      return next(new ErrorResponse("プロジェクトの閲覧権限がありません"));
    }

    user = await User.findById(req.params.id);

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
  } else if (req.params.workspaceId) {
    const workspace = await Workspace.findById(req.params.workspaceId);
    const isOwnerInWorkspace = workspace.owners.includes(req.user.id);
    if (!isOwnerInWorkspace) {
      return next(new ErrorResponse("ユーザーの閲覧権限がありません"));
    }

    user = await User.findById(req.params.id);

    const IsMemberInWorkspace = workspace.members.includes(user.id);

    if (!IsMemberInWorkspace) {
      return next(
        new ErrorResponse("ワークスペースのメンバーではないため閲覧できません")
      );
    }

    profile = await UserProfile.findOne({
      user: user.id,
      workspace: req.params.workspaceId,
    });
  }

  res.status(200).json({
    success: true,
    user,
    tasks,
    profile,
  });
});

// @desc show workspace members
// @route GET /api/v1/workspaces/:workspaceId/users/
exports.getWorkspaceMembers = asyncHandler(async (req, res, next) => {
  const workspace = await Workspace.findById(req.params.workspaceId);
  const isOwnerInWorkspace = workspace.owners.includes(req.user.id);
  if (!isOwnerInWorkspace) {
    return next(new ErrorResponse("ユーザー一覧の閲覧権限がありません"));
  }

  const users = await User.find({
    _id: { $in: workspace.members },
    registration: true,
  });

  res.status(200).json({
    success: true,
    users,
  });
});

//　TODO: 招待中でまだ未登録のユーザーを登録未完了ユーザーとして表示したい
