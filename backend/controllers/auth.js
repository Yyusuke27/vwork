const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const Workspace = require("../models/Workspace");

const sendEmail = require("../utils/sendEmail");

// @desc 会員登録
// @route POST /api/v1/auth/signup
// @access Public
exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });

  sendTokenResponse(user, 200, res, 0);
});

// @desc ログイン
// @route POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(
      new ErrorResponse("メールアドレスとパスワードを入力してください"),
      400
    );
  }

  // ユーザーが存在するかチェック
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("認証情報が間違っています", 401));
  }

  // パスワードがあってるかチェック
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("認証情報が間違っています", 401));
  }

  const workspaces = await Workspace.find({ members: user._id });
  let workspaceCount = 0;
  if (workspaces) {
    workspaceCount = workspaces.length;
  }

  sendTokenResponse(user, 200, res, workspaceCount);
});

// @desc 現在ログイン中のユーザーを取得
// @route POST /api/v1/auth/current
// @access Private
exports.currentUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select(
    "name email role registration lastAccessWorkspace"
  );

  const workspace = await Workspace.findById(user.lastAccessWorkspace).select(
    "name"
  );

  res.status(200).json({
    success: true,
    data: user,
    workspace,
  });
});

// @desc ログアウト
// @route GET /api/v1/auth/logout
// @access Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc パスワードを忘れたときのリセット申請処理
// @route POST /api/v1/auth/forgotpassword
// @access Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new ErrorResponse("このメールアドレスは登録されていません。", 404)
    );
  }

  //　トークンの取得
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // TODO: リセットのURLをReactページのURLに指定する
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `パスワードのリセットはこちらから \n\n ${resetUrl}`;
  const html = `<a href="${resetUrl}">パスワードのリセットはこちらから</a>`;

  try {
    await sendEmail({
      email: user.email,
      subject: "パスワードの再設定",
      message,
      html,
    });

    res.status(200).json({ success: true, data: "メールを送信しました" });
  } catch (err) {
    console.log(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse("メールの送信に失敗しました", 500));
  }
});

// @desc パスワードリセット処理
// @route PUT /api/v1/auth/resetpassword/:resettoken
// @access Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorResponse("無効なトークンです", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  const workspaces = await Workspace.find({ members: user._id });
  let workspaceCount = 0;
  if (workspaces) {
    workspaceCount = workspaces.length;
  }

  sendTokenResponse(user, 200, res, workspaceCount);
});

// トークンを取得,cookieを作成、レスポンスを返す
const sendTokenResponse = (user, statusCode, res, workspaceCount) => {
  // トークン生成
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    workspaceCount,
  });
};

exports.sendTokenResponse = sendTokenResponse;
