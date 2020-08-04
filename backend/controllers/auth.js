const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

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

  sendTokenResponse(user, 200, res);
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

  sendTokenResponse(user, 200, res);
});

// トークンを取得,cookieを作成、レスポンスを返す
const sendTokenResponse = (user, statusCode, res) => {
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
  });
};

// @desc 現在ログイン中のユーザーを取得
// @route POST /api/v1/auth/current_user
// @access Private
exports.currentUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// TODO: パスワードを忘れたときのリセット処理を追加
