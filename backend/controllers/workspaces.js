const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Workspace = require("../models/Workspace");

// @desc Get all Workspaces or specific Workspaces
// @route Get /api/v1/workspaces
// @access Public
exports.getWorkspaces = asyncHandler(async (req, res, next) => {
  // admin user以外はuserに紐づけられたworkspaceのみ表示
  let workspaces;
  if (req.user.role === "admin") {
    workspaces = await Workspace.find();
  } else {
    workspaces = await Workspace.find({ members: req.user.id });
  }

  res.status(200).json({
    success: true,
    data: workspaces,
  });
});

// @desc Get single workspace
// @route Get /api/v1/workspace/:id
// @access Public
exports.getWorkspace = asyncHandler(async (req, res, next) => {
  const workspace = await Workspace.findById(req.params.id);

  if (!workspace) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のワークスペースはありません。`),
      404
    );
  }

  // workspaceのメンバーにのみ表示
  const isMemberInWorkspace = workspace.members.includes(req.user.id);
  if (!isMemberInWorkspace) {
    return next(new ErrorResponse(`ワークスペースへの権限がありません`), 404);
  }

  res.status(200).json({
    success: true,
    data: workspace,
  });
});

// @desc Create new workspace
// @route POST /api/v1/workspaces
// @access Private
exports.createWorkspace = asyncHandler(async (req, res, next) => {
  // TODO: req.bodyにuserを追加

  const workspace = await Workspace.create(req.body);

  res.status(201).json({
    success: true,
    data: workspace,
  });
});

// @desc Update workspace
// @route PUT /api/v1/workspaces/:id
// @access Private
exports.updateWorkspace = asyncHandler(async (req, res, next) => {
  let workspace = await Workspace.findById(req.params.id);

  if (!workspace) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のワークスペースはありません`, 404)
    );
  }

  // workspace内のroleがowner or admin userのみ変更可能にする
  const isOwnerInWorkspace = workspace.owners.includes(req.user.id);
  const isAdminUser = req.user.role === "admin";

  if (!isOwnerInWorkspace && !isAdminUser) {
    return next(new ErrorResponse(`ワークスペースの編集権限がありません`));
  }

  workspace = await Workspace.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: workspace,
  });
});

// @desc Delete workspace
// @route DELETE /api/v1/workspaces/:id
// @access Private
exports.deleteWorkspace = asyncHandler(async (req, res, next) => {
  const workspace = await Workspace.findById(req.params.id);

  if (!workspace) {
    return next(
      new ErrorResponse(`ID: ${req.params.id}のワークスペースはありません`, 404)
    );
  }

  // workspace内のroleがowner or admin userのみ削除可能にする
  const isOwnerInWorkspace = workspace.owners.includes(req.user.id);
  const isAdminUser = req.user.role === "admin";

  if (!isOwnerInWorkspace && !isAdminUser) {
    return next(new ErrorResponse(`ワークスペースの削除権限がありません`));
  }

  workspace.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
