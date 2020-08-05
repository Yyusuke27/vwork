const express = require("express");
const {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaces");

const { protect } = require("../middleware/auth");

const projectRouter = require("./projects");
const taskRouter = require("./tasks");

const router = express.Router();

// 他のルーターに再度ルート
router.use("/:workspaceId/projects", projectRouter);
router.use("/:workspaceId/tasks", taskRouter);

router.route("/").get(protect, getWorkspaces).post(protect, createWorkspace);

router
  .route("/:id")
  .get(protect, getWorkspace)
  .put(protect, updateWorkspace)
  .delete(protect, deleteWorkspace);

module.exports = router;
