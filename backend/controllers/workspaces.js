const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Workspace = require("../models/Workspace");
const Invite = require("../models/Invite");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

//　TODO: 招待中でまだ未登録のユーザーを登録未完了ユーザーとして表示したい

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

// @desc show new members
// @route GET /api/v1/workspaces/:workspaceId/members
// @access Private
exports.getMembers = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  // メンバー一覧表示
  // TODO: workspaceのowner and adminユーザーのみ閲覧可能
  const workspace = await Workspace.findById(req.params.id);
  if (!workspace) {
    return next(new ErrorResponse("ワークスペースが存在しません"), 404);
  }

  const users = await User.find({ _id: { $in: workspace.members } });

  res.status(200).json({
    success: true,
    data: users,
  });
});

// @desc invite new members
// @route POST /api/v1/workspaces/:workspaceId/members
// @access Private
exports.inviteNewMembers = asyncHandler(async (req, res, next) => {
  // メンバー招待
  // workspaceのメンバーのみ詳細できる
  const workspace = await Workspace.findById(req.params.id);
  const isMemberInWorkspace = workspace.members.includes(req.user.id);

  if (!isMemberInWorkspace) {
    return next(new ErrorResponse("招待する権限がありません"));
  }

  for (const invitation of req.body.invitations) {
    // ユーザー作成
    // passwordを乱数で生成
    const buff = crypto.randomBytes(8); // バイナリで8byteのランダムな値を生成
    const hex = buff.toString("hex"); // 16進数の文字列に変換
    const password = parseInt(hex, 16); // integerに変換して返却

    const newUserData = {
      ...invitation,
      password,
    };
    const invitee = await User.create(newUserData);

    const invite = await Invite.create({
      user: invitee._id,
      workspace: req.params.id,
    });

    // invitationのためのトークンを生成
    const inviteToken = invite.getInvitationToken(req.params.id);

    await invite.save({ validateBeforeSave: false });

    //メール送信
    // TODO: invitee registのURLをReactページのURLに指定する
    const inviteeRegistUrl = `${req.protocol}://${req.get(
      "host"
    )}/regist/invitee/${inviteToken}`;

    const message = `招待からの登録はこちらから \n\n ${inviteeRegistUrl}`;
    const html = `<a href="${inviteeRegistUrl}">${invitation.name}さん：招待からの登録はこちらから</a>`;

    try {
      await sendEmail({
        email: invitee.email,
        subject: "vworkに招待されました",
        message,
        html,
      });
    } catch (err) {
      console.log(err);

      invite.invitationToken = undefined;
      invite.invitationExpire = undefined;

      await invite.save();

      return next(new ErrorResponse("メールの送信に失敗しました", 500));
    }
  }

  res.status(200).json({
    success: true,
    data: "招待が完了しました",
  });
});

// @desc select workspace
// @route POST /api/v1/workspaces/:workspaceId/select
// @access Private
// TODO: lastAccessWorkspaceをupdateする
