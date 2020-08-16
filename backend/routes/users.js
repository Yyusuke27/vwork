const express = require("express");
const {
  updateUser,
  updateUserAndProfile,
  getProjectUser,
} = require("../controllers/users");

const { protect } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router.route("/:id/profile").put(protect, updateUserAndProfile);

router.route("/:id").get(protect, getProjectUser).put(protect, updateUser);

module.exports = router;
