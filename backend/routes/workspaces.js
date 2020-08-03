const express = require("express");
const {
  getWorkspaces,
  getWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaces");

const router = express.Router();

router.route("/").get(getWorkspaces).post(createWorkspace);

router
  .route("/:id")
  .get(getWorkspace)
  .put(updateWorkspace)
  .delete(deleteWorkspace);

module.exports = router;
