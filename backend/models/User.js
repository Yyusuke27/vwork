const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "名前を入力してください"],
    },
    email: {
      type: String,
      required: [true, "メールアドレスを入力してください"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "有効なメールアドレスを入力してください",
      ],
    },
    active: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["normal"],
      default: "normal",
    },
    password: {
      type: String,
      required: [true, "パスワードを入力してください"],
      minlength: 6,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    invitations: [
      {
        workspace: String,
        invitationToken: String,
        invitationExpire: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// パスワードの暗号化
UserSchema.pre("save", async function (next) {
  // passwordが変更された時のみ
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// JWTの設定
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// 入力されたパスワードとDBのハッシュ化されたパスワードの照合
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// TODO: リセットパスワードTokenの設定
// TODO: 招待されたときのTokenの設定

module.exports = mongoose.model("User", UserSchema);
