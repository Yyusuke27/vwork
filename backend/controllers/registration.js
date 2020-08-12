const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Project = require("../models/Project");
const Workspace = require("../models/Workspace");
const User = require("../models/User");
const UserProfile = require("../models/UserProfile");
const Invite = require("../models/Invite");
const sendEmail = require("../utils/sendEmail");
const { sendTokenResponse } = require("./auth");

// TODO: registrationがtrueだったら"/"に飛ばす

// @desc registration signup user
// @route POST /api/v1/registration
// @access Private
exports.regist = asyncHandler(async (req, res, next) => {
  // TODO: profileとinviteをuserと紐付ける virtualで行けるか？
  // TODO: lastAccessWorkspaceにworkspaceをいれる
  const newWorkspace = {
    ...req.body.workspace,
    active: true,
    owners: [req.user.id],
    members: [req.user.id],
  };
  const workspace = await Workspace.create(newWorkspace);

  const newUser = {
    name: req.body.user.name,
    lastAccessWorkspace: workspace._id,
    registration: true,
  };
  const updatedUser = await User.findByIdAndUpdate(req.user.id, newUser, {
    new: true,
    runValidators: true,
  });

  const newProfile = {
    user: updatedUser._id,
    workspace: workspace._id,
    position: req.body.user.position,
  };
  const profile = await UserProfile.create(newProfile);

  updatedUser.profiles.push(profile._id);

  await updatedUser.save();

  const newProject = {
    ...req.body.project,
    workspace: workspace._id,
    owners: [req.user.id],
    members: [req.user.id],
  };
  await Project.create(newProject);

  // inviteの処理
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
      workspace: workspace._id,
    });

    // invitationのためのトークンを生成
    const inviteToken = invite.getInvitationToken(workspace._id);

    await invite.save({ validateBeforeSave: false });

    //メール送信
    // TODO: invitee registのURLをReactページのURLに指定する
    // TODO: 本番の時はhostを変える
    const inviteeRegistUrl = `${req.protocol}://localhost:3000/regist/invitee/welcome/?${inviteToken}`;

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
    data: "登録作業が完了しました",
    workspace: workspace._id,
  });
});

// @desc get invitee user info
// @route GET /api/v1/registration/invitee/:invitationToken
// @access Private
exports.getInviteeUserInfo = asyncHandler(async (req, res, next) => {
  // トークンをDBと比較するためハッシュ化
  const invitationToken = crypto
    .createHash("sha256")
    .update(req.params.invitationToken)
    .digest("hex");

  // 登録時に入力したデータの取得
  const invite = await Invite.findOne({
    invitationToken,
    invitationExpire: { $gt: Date.now() },
  });

  if (!invite) {
    return next(new ErrorResponse("無効なトークンです"));
  }

  const workspaceId = invite.workspace;

  const user = await User.findById(invite.user);

  // TODO: userのregistrationがtrueだったらreact側でプロフィールのみの入力にする

  res.status(200).json({
    success: true,
    data: user,
    workspace: workspaceId,
  });
});

// @desc registration invitee user
// @route POST /api/v1/registration/invitee
// @access Private
exports.registInvitee = asyncHandler(async (req, res, next) => {
  // TODO: workspaceのメンバーに追加する処理が必要
  // 招待者の登録作業

  const invitationToken = makeTokenHash(req.body.token);

  const invite = await Invite.findOne({ invitationToken });

  if (!invite) {
    return next(new ErrorResponse("無効なトークンです", 400));
  }

  const inviteUser = {
    name: req.body.user.name,
    email: req.body.user.email,
    lastAccessWorkspace: invite.workspace,
    registration: true,
  };

  const user = await User.findByIdAndUpdate(invite.user, inviteUser, {
    new: true,
    runValidators: true,
  });

  user.password = req.body.user.password;
  await user.save();

  let profile = await UserProfile.findOne({
    user: user._id,
    workspace: invite.workspace,
  });

  // workspaceのメンバーに追加
  await Workspace.findByIdAndUpdate(
    invite.workspace,
    { $push: { members: user._id } },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!profile) {
    profile = await UserProfile.create({
      user: user._id,
      workspace: invite.workspace,
      position: req.body.user.position,
    });
  } else {
    profile.position = req.body.user.position;
    await profile.save();
  }

  user.profiles.push(profile._id);
  await user.save();

  const workspaces = await Workspace.find({ members: user._id });
  let workspaceCount = 0;
  if (workspaces) {
    workspaceCount = workspaces.length;
  }

  sendTokenResponse(user, 200, res, workspaceCount);
});

const makeTokenHash = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};
