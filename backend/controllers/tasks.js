const moment = require("moment");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Task = require("../models/Task");
const Workspace = require("../models/Workspace");
const Project = require("../models/Project");

// TODO: 今日やるデータを取得するAPIを作成←一覧のところのresでtodayとか作って値を渡す。新しくAPIは作らない。
// TODO: Workspaceに紐づくタスク一覧から今日やるを除く
// TODO: Workspaceに紐づくタスク一覧でクエリが飛んで来た時の処理

// @desc Get all tasks or specific tasks
// @route Get /api/v1/tasks
// @route Get /api/v1/projects/:projectId/tasks
// @route Get /api/v1/workspaces/:workspaceId/tasks
// @access Public
exports.getTasks = asyncHandler(async (req, res, next) => {
  let tasks;
  let todaysTasks;

  // TODO: プロジェクトのメンバーのみ閲覧可能
  if (req.params.projectId) {
    const project = await Project.findById(req.params.projectId);
    const isMember = project.members.includes(req.user.id);
    if (!isMember) {
      return next(new ErrorResponse("タスクの閲覧権限がありません"));
    }
    tasks = await Task.find({ project: req.params.projectId })
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
    tasks = await Task.find({
      user: req.user.id,
      todaysTask: false,
      workspace: req.params.workspaceId,
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
    todaysTasks = await Task.find({
      user: req.user.id,
      todaysTask: true,
      workspace: req.params.workspaceId,
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
  } else {
    if (req.user.role === "admin") {
      tasks = await Task.find();
    } else {
      return next(new ErrorResponse("タスクの閲覧権限がありません"));
    }
  }

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
    todaysTasks,
  });
});

// @desc Get single task
// @route Get /api/v1/tasks/:id
// @access Public
exports.getTask = asyncHandler(async (req, res, next) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のタスクはありません`, 404)
    );
  }

  // タスクの担当者かどうか
  const isTaskMember = task.user.toString() === req.user.id;

  // タスクが入っているプロジェクトのメンバーかどうか
  let isProjectMember;
  if (task.project) {
    const project = await Project.findById(task.project);
    if (project) {
      isProjectMember = project.members.includes(req.user.id);
    }
  }

  // 1.タスクのメンバー or 2.プロジェクトのメンバー or 3.adminユーザーのみ閲覧可能
  if (!isTaskMember && !isProjectMember && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `ID:${req.params.id}のタスクの閲覧権限がありません`,
        404
      )
    );
  }

  task = await Task.findById(req.params.id).select(
    "user name description startDateAt endDateAt state progress priority project todaysTask"
  );

  res.status(200).json({
    success: true,
    data: task,
  });
});

// @desc Create new task
// @route POST /api/v1/workspaces/:workspaceId/tasks
// @route POST /api/v1/projects/:projectId/tasks
// @access Private
// TODO: paramsにprojectsをつけるパターンはいらないかも
exports.createTask = asyncHandler(async (req, res, next) => {
  // workspaceからの場合
  if (req.params.workspaceId) {
    // workspaceのメンバーではなかったら追加できない
    const workspace = await Workspace.findById(req.params.workspaceId);
    if (!workspace) {
      return next(
        new ErrorResponse(
          `ID:${req.params.workspaceId}のworkspaceはありません`,
          404
        )
      );
    }
    const idMemberInWorkspace = workspace.members.includes(req.user.id);
    if (!idMemberInWorkspace) {
      return next(new ErrorResponse(`タスクの追加権限がありません`));
    }

    // ワークスペースをbodyに追加
    req.body.workspace = req.params.workspaceId;
  }
  // projectからの場合
  if (req.params.projectId) {
    // プロジェクトのメンバーではなかったら追加できない
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return next(
        new ErrorResponse(
          `ID:${req.params.projectId}のprojectはありません`,
          404
        )
      );
    }
    const isMemberInProject = project.members.includes(req.user.id);
    if (!isMemberInProject) {
      return next(new ErrorResponse(`タスクの追加権限がありません`));
    }

    // プロジェクトをbodyに追加
    req.body.project = req.params.projectId;
    // ワークスペースをbodyに追加
    req.body.workspace = project.workspace;
  }

  // ユーザーをbodyに追加
  // req.body.user = req.user.id;

  const task = await Task.create(req.body);

  res.status(201).json({
    success: true,
    data: task,
  });
});

// @desc Update task
// @route PUT /api/v1/tasks/:id
// @access Private
exports.updateTask = asyncHandler(async (req, res, next) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のタスクはありません`, 404)
    );
  }

  // 1.タスクのユーザー or 2.タスクが所属するプロジェクト内のメンバー or 3.admin user のみ更新可能
  // 1.タスクのユーザー
  const isTaskUser = task.user.toString() === req.user.id;
  // 2.タスクが所属するプロジェクト内のメンバー
  let isProjectMember;
  if (task.project) {
    const project = await Project.findById(task.project);
    if (project) {
      isProjectMember = project.members.includes(req.user.id);
    }
  }
  // 3.admin user
  let isAdmin = req.user.role === "admin";

  if (!isTaskUser && !isProjectMember && !isAdmin) {
    return next(new ErrorResponse(`タスクの編集権限がありません`));
  }

  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: updateTask,
  });
});

// @desc Delete task
// @route DELETE /api/v1/tasks/:id
// @access Private
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`ID:${req.params.id}のタスクはありません`, 404)
    );
  }

  // タスクのユーザーとadminのみ削除可能
  const isTaskUser = task.user.toString() === req.user.id;
  const isAdmin = req.user.role === "admin";
  if (!isTaskUser && !isAdmin) {
    return next(new ErrorResponse("タスクの削除権限がありません"));
  }

  task.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc Get near deadline tasks
// @route Get /api/v1/workspaces/:workspaceId/tasks/near_deadline
// @access Public
exports.getNearDeadlineTasks = asyncHandler(async (req, res, next) => {
  // 期限が近い(3日以内)タスクを取得
  const nearDeadlineDate = moment().add(3, "days");
  const tasks = await Task.find({
    user: req.user.id,
    workspace: req.params.workspaceId,
    endDateAt: { $lte: nearDeadlineDate },
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
      endDateAt: 1,
    });

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

// @desc Get recently added tasks
// @route Get /api/v1/workspaces/:workspaceId/tasks/recent
// @access Public
exports.getRecentTasks = asyncHandler(async (req, res, next) => {
  const oneWeekAgo = moment().subtract(1, "weeks");
  // (1週間以内)updated_atタスクを取得
  const tasks = await Task.find({
    user: req.user.id,
    workspace: req.params.workspaceId,
    updatedAt: { $gte: oneWeekAgo },
  })
    .populate({
      path: "project",
      select: "name",
    })
    .populate({
      path: "user",
      select: "name",
    })
    .limit(3)
    .sort({
      updatedAt: -1,
    });

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});
