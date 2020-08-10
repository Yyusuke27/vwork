const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "メールアドレスを入力してください"],
      unique: true,
      match: [
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "有効なメールアドレスを入力してください",
      ],
    },
    registration: {
      type: Boolean,
      default: false,
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
    positions: [mongoose.Schema.ObjectId],
    invitations: [mongoose.Schema.ObjectId],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
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

// リセットパスワードTokenの設定
UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

UserSchema.virtual("userprofiles", {
  ref: "UserProfile",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

module.exports = mongoose.model("User", UserSchema);
