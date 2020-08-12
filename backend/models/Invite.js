const crypto = require("crypto");
const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
    workspace: { type: mongoose.Schema.ObjectId, ref: "Workspace" },
    invitationToken: String,
    invitationExpire: Date,
  },
  {
    timestamps: true,
  }
);

// 招待されたときのTokenの設定
InviteSchema.methods.getInvitationToken = function (workspaceId) {
  const inviteToken = crypto.randomBytes(20).toString("hex");

  this.workspace = workspaceId;
  this.invitationToken = crypto
    .createHash("sha256")
    .update(inviteToken)
    .digest("hex");
  this.invitationExpire = Date.now() + 10 * 60 * 1000;

  return inviteToken;
};

module.exports = mongoose.model("Invite", InviteSchema);
