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
    projects = await Project.find({
      members: req.user.id,
      workspace: req.params.workspaceId,
    });
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
  const project = await Project.findById(req.params.id).populate({
    path: "members",
    populate: { path: "members" },
  });

  project.members = project.members.filter(
    (member) => member.registration === true
  );

  if (!project) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のプロジェクトはありません。`),
      404
    );
  }

  // ユーザーがプロジェクトのメンバーではなかったら表示しない
  // const isMemberInProject = project.members.includes(req.user.id);
  const isMemberInProject = project.members.find(
    (member) => member._id.toString() === req.user.id
  );

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

  // TODO: 色、アイコンはフロントで選べるようにする
  const iconNum = Math.floor(Math.random() * 7);
  const colorNum = Math.floor(Math.random() * 7);

  const projectData = {
    ...req.body,
    icon: iconNum,
    color: colorNum,
  };

  await Project.create(projectData);

  const projects = await Project.find({
    members: req.user.id,
    workspace: req.params.workspaceId,
  });

  res.status(201).json({
    success: true,
    data: projects,
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
// @route GET /api/v1/projects/:projectId/members
// @access Public
exports.getMembers = asyncHandler(async (req, res, next) => {
  // Project内のメンバーを取得
  const project = await Project.findById(req.params.projectId);
  if (!project) {
    return next(new ErrorResponse("プロジェクトが存在しません", 404));
  }

  const isMemberInProject = project.members.includes(req.user.id);
  if (!isMemberInProject) {
    return next(new ErrorResponse("プロジェクトの閲覧権限がありません"));
  }

  const members = await User.find({ _id: { $in: project.members } });

  res.status(200).json({
    success: true,
    count: members.length,
    data: members,
  });
});

// @desc Get members
// @route GET /api/v1/projects/:projectId/members/new
// @route GET /api/v1/workspaces/:workspaceId/projects/:projectId/members/new
// @access Public
exports.getNewMembers = asyncHandler(async (req, res, next) => {
  // Project外のメンバーを取得
  const project = await Project.findById(req.params.projectId);
  if (!project) {
    return next(new ErrorResponse("プロジェクトが存在しません", 404));
  }

  const workspace = await Workspace.findById(req.params.workspaceId);
  if (!workspace) {
    return next(new ErrorResponse("ワークスペースが存在しません", 404));
  }

  const isMemberInProject = project.members.includes(req.user.id);
  if (!isMemberInProject) {
    return next(new ErrorResponse("プロジェクトの閲覧権限がありません"));
  }

  const members = await User.find({
    _id: { $in: workspace.members, $nin: project.members },
  });

  res.status(200).json({
    success: true,
    count: members.length,
    data: members,
  });
});

// @desc Add member
// @route POST /api/v1/projects/:projectId/members
// @access Private
exports.addMemeber = asyncHandler(async (req, res, next) => {
  // Project内のメンバーであればユーザーを追加できる。
  // req.bodyのmembersはarray
  const project = await Project.findById(req.params.projectId);
  if (!project) {
    return next(new ErrorResponse("プロジェクトが存在しません", 404));
  }

  const isMemberInProject = project.members.includes(req.user.id);
  if (!isMemberInProject) {
    return next(new ErrorResponse("プロジェクトの閲覧権限がありません"));
  }

  const updateProject = await project.update(
    { $push: { members: { $each: req.body.members } } },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: updateProject,
  });
});
