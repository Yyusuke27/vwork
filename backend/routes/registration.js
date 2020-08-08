const express = require("express");

const {
  regist,
  registInvitee,
  getInviteeUserInfo,
} = require("../controllers/registration");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/").post(protect, regist);

router.route("/invitee").post(registInvitee);

router.route("/invitee/:invitationToken").get(getInviteeUserInfo);

module.exports = router;
