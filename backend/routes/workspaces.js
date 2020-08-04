const express = require("express");
const {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaces");

const projectRouter = require("./projects");

const router = express.Router();

// 他のルーターに再度ルート
router.use("/:workspaceId/projects", projectRouter);

router.route("/").get(getWorkspaces).post(createWorkspace);

router
  .route("/:id")
  .get(getWorkspace)
  .put(updateWorkspace)
  .delete(deleteWorkspace);

module.exports = router;
