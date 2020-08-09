const express = require("express");
const {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
  getMembers,
  inviteNewMembers,
} = require("../controllers/workspaces");

const { protect } = require("../middleware/auth");

const projectRouter = require("./projects");
const taskRouter = require("./tasks");
const attendanceRouter = require("./attendances");

const router = express.Router();

// 他のルーターに再度ルート
router.use("/:workspaceId/projects", projectRouter);
router.use("/:workspaceId/tasks", taskRouter);
router.use("/:workspaceId/attendances", attendanceRouter);
router.use("/:workspaceId/users/:userId/attendances", attendanceRouter);

router.route("/").get(protect, getWorkspaces).post(protect, createWorkspace);

router
  .route("/:id/members")
  .get(protect, getMembers)
  .post(protect, inviteNewMembers);

router
  .route("/:id")
  .get(protect, getWorkspace)
  .put(protect, updateWorkspace)
  .delete(protect, deleteWorkspace);

module.exports = router;
