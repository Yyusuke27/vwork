const express = require("express");
const {
  updateUser,
  updateUserAndProfile,
  getProjectUser,
} = require("../controllers/users");

const { protect } = require("../middleware/auth");

const projectRouter = require("./projects");
const taskRouter = require("./tasks");

const router = express.Router({ mergeParams: true });

// 他のルーターに再度ルート
router.use("/:userId/projects", projectRouter);
router.use("/:userId/tasks", taskRouter);

router.route("/:id/profile").put(protect, updateUserAndProfile);

router.route("/:id").get(protect, getProjectUser).put(protect, updateUser);

module.exports = router;
