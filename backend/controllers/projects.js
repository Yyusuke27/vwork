const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Project = require("../models/Project");
const Workspace = require("../models/Workspace");
const User = require("../models/User");

// @desc Get all Projects or specific Projects
// @route Get /api/v1/projects
// @route Get /api/v1/workspaces/:workspaceId/projects
// @access Public
exports.getProjects = asyncHandler(async (req, res, next) => {
  let projects;
  if (req.params.workspaceId) {
    projects = await Project.find({ workspace: req.params.workspaceId });
  } else {
    if (req.user.role === "admin") {
      projects = await Project.find();
    } else {
      projects = await Project.find({ members: req.user.id });
    }
  }

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects,
  });
});

// @desc Get single project
// @route Get /api/v1/projects/:id
// @access Public
exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のプロジェクトはありません。`),
      404
    );
  }

  // ユーザーがプロジェクトのメンバーではなかったら表示しない
  const isMemberInProject = project.members.includes(req.user.id);

  if (!isMemberInProject) {
    return next(
      new ErrorResponse(
        `ID:${req.params.id}のプロジェクトのメンバーではありません`
      ),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc Create new project
// @route POST /api/v1/workspaces/:workspaceId/projects
// @access Private
exports.createProject = asyncHandler(async (req, res, next) => {
  const workspace = await Workspace.findById(req.params.workspaceId);

  if (!workspace) {
    return next(
      new ErrorResponse(`ID: ${req.params.workspaceId}のworkspaceはありません`)
    );
  }

  // ユーザーがworkspaceのメンバーか確認
  const isUserInProject = workspace.members.includes(req.user.id);
  if (!isUserInProject) {
    return next(
      new ErrorResponse(
        `ユーザーID:${req.user.id} は workspace${workspace._id}にプロジェクトを追加する権限がありません`,
        404
      )
    );
  }

  // ワークスペースをbodyに追加
  req.body.workspace = req.params.workspaceId;
  // ユーザーをbodyに追加
  req.body.members = [req.user.id];
  // オーナーをbodyに追加
  req.body.owners = [req.user.id];

  const project = await Project.create(req.body);

  console.log(project);

  res.status(201).json({
    success: true,
    data: project,
  });
});

// @desc Update project
// @route PUT /api/v1/projects/:id
// @access Private
exports.updateProject = asyncHandler(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のプロジェクトはありません`, 404)
    );
  }

  // ユーザーがprojectのメンバーか確認
  const isUserInProject = project.members.includes(req.user.id);
  // ユーザーがprojectのオーナーが確認
  const isOwnerInProject = project.owners.includes(req.user.id);
  // ユーザーがprojectのメンバーprojectのメンバーでなく、
  // projectのroleがowner or admin userでなかったら更新させない
  if (!isUserInProject && !isOwnerInProject && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `ユーザーID:${req.user.id} は project${req.params.id}を更新できません`,
        404
      )
    );
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc Delete project
// @route DELETE /api/v1/projects/:id
// @access Private
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`ID: ${req.params.id}のプロジェクトはありません`, 404)
    );
  }

  // TODO: Project内のroleがowner or admin userのみ削除可能にする
  // ユーザーがprojectのメンバーか確認
  const isUserInProject = project.members.includes(req.user.id);
  // ユーザーがprojectのオーナーが確認
  const isOwnerInProject = project.owners.includes(req.user.id);
  if (!isUserInProject && !isOwnerInProject && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `ユーザーID:${req.user.id} は project${req.params.id}を削除できません`,
        404
      )
    );
  }

  project.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc Get members
// @route GET /api/v1/projects/members
// @access Public
exports.getMembers = asyncHandler(async (req, res, next) => {
  // TODO: Project内のメンバーを取得
});

// @desc Get members
// @route GET /api/v1/projects/members/new
// @access Public
exports.getNewMembers = asyncHandler(async (req, res, next) => {
  // TODO: Project外のメンバーを取得
});

// @desc Add member
// @route POST /api/v1/projects/members
// @access Private
exports.addMemeber = asyncHandler(async (req, res, next) => {
  // TODO: Project内のメンバーであればユーザーを追加できる。
  // TODO: Workspace内のユーザー一覧の中から追加したいユーザーを選択する
});
