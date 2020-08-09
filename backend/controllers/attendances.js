const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const Attendance = require("../models/Attendance");
const Workspace = require("../models/Workspace");

const moment = require("moment");

// @desc Get all attendances or user attendances
// @route Get /api/v1/attendances
// @route Get /api/v1/workspaces/:workspaceId/attendances
// @route Get /api/v1/workspaces/:workspaceId/users/:userId/attendances
// @access Public
exports.getAttendances = asyncHandler(async (req, res, next) => {
  let attendances;
  if (req.params.workspaceId && req.params.userId) {
    // workspaceのownerはworkspaceのmemberの勤怠を閲覧可能
    const workspace = await Workspace.findById(req.params.workspaceId);
    const isOwnerInWorkspace = workspace.owners.includes(req.user.id);
    if (!isOwnerInWorkspace) {
      return next(new ErrorResponse("勤怠情報の閲覧権限がありません"));
    }
    attendances = await Attendance.find({
      workspace: req.params.workspaceId,
      user: req.params.userId,
    });
  } else if (req.params.workspaceId) {
    // 自分の全ての勤怠管理の閲覧
    attendances = await Attendance.find({ user: req.user.id });
  } else {
    // adminの場合全て閲覧可能
    if (req.user.role === "admin") {
      attendances = await Attendance.find();
    } else {
      return next(
        new ErrorResponse("全ての勤怠情報を閲覧する権限がありません")
      );
    }
  }

  res.status(200).json({
    success: true,
    count: attendances.length,
    data: attendances,
  });
});

// @desc Get single attendance
// @route Get /api/v1/attendances/:id
// @route Get /api/v1/workspaces/:workspaceId/attendances/:id
// @access Public
exports.getAttendance = asyncHandler(async (req, res, next) => {
  let attendance;
  // 閲覧可能なのはユーザー and workspaceのオーナー  and admin
  console.log(req.params);
  if (req.params.workspaceId) {
    const workspace = await Workspace.findById(req.params.workspaceId);
    const isOwnerInWorkspace = workspace.owners.includes(req.user.id);

    attendance = await Attendance.findById(req.params.id);
    const isUserOfAttendance = attendance.user.toString() === req.user.id;

    const isAttendanceOfWorkspace =
      req.params.workspaceId === attendance.workspace.toString();

    if (!isOwnerInWorkspace && !isUserOfAttendance) {
      return next(new ErrorResponse("この勤怠をみる権限がありません"));
    }
    // attendanceがworkspaceのものではなかったら表示しない。
    // TODO: 冗長だからもっとすっきりさせたい
    if (!isAttendanceOfWorkspace) {
      return next(new ErrorResponse("この勤怠をみる権限がありません"));
    }
  } else {
    attendance = await Attendance.findById(req.params.id);
    const isUserOfAttendance = attendance.user.toString() === req.user.id;

    if (req.user.role !== "admin" && !isUserOfAttendance) {
      return next(new ErrorResponse("この勤怠をみる権限がありません"));
    }
  }

  res.status(200).json({
    success: true,
    data: attendance,
  });
});

// @desc Update attendance
// @route PUT /api/v1/attendances/:id
// @access Private
exports.updateAttendance = asyncHandler(async (req, res, next) => {
  // 更新できるのはユーザーとadminのみ
  let attendance = await Attendance.findById(req.params.id);
  if (!attendance) {
    return next(new ErrorResponse("勤怠情報がありません", 404));
  }

  const isUserInAttendance = attendance.user.toString() === req.user.id;
  const isAdmin = req.user.role === "admin";

  if (!isUserInAttendance && !isAdmin) {
    return next(new ErrorResponse("勤怠情報を更新する権限がありません"));
  }

  const updateAttendance = await Attendance.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  // 出勤したらuserのactiveをtrueにする
  if (updateAttendance.isModified("startedAt")) {
    await User.findByIdAndUpdate(
      updateAttendance.user,
      { active: true },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  // 退勤したらuserのactiveをfalseにする
  if (updateAttendance.isModified("endedAt")) {
    await User.findByIdAndUpdate(
      updateAttendance.user,
      { active: false },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  res.status(200).json({
    success: true,
    data: updateAttendance,
  });
});

// @desc Get today attendance
// @route Get /api/v1/workspaces/:workspaceId/attendances/today
// @access Public
exports.getTodayAttendance = asyncHandler(async (req, res, next) => {
  console.log("hello");
  // ホーム画面、勤怠画面に出すやつ
  let latestAttendance = await Attendance.findOne(
    { user: req.user.id, workspace: req.params.workspaceId },
    null,
    {
      sort: {
        createdAt: -1,
      },
    }
  );

  // Attendanceがない場合と
  // 最新のattendanceが今日より前のものであった時の処理
  const newAttendanceData = {
    user: req.user.id,
    workspace: req.params.workspaceId,
  };
  if (!latestAttendance) {
    // Attendanceがない場合の処理
    // 新規で作成して、それを返す
    latestAttendance = await Attendance.create(newAttendanceData);
  } else {
    // 最新attendanceの日付が今日より前のものだったら新規で作成して、それを返す
    const today = moment().utcOffset("+09:00").format("YYYY-MM-DD");
    const createdDate = moment(latestAttendance.createdAt)
      .utcOffset("+09:00")
      .format("YYYY-MM-DD");
    if (today !== createdDate) {
      latestAttendance = await Attendance.create(newAttendanceData);
    }
  }

  console.log(latestAttendance);

  res.status(200).json({
    success: true,
    data: latestAttendance,
  });
});
