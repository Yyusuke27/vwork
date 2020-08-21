const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getMembers,
  getNewMembers,
  addMemeber,
  getMyProjects,
} = require("../controllers/projects");

const { protect } = require("../middleware/auth");

const taskRouter = require("./tasks");

const router = express.Router({ mergeParams: true });

// 他のルーターに再度ルート
router.use("/:projectId/tasks", taskRouter);

router.route("/").get(protect, getProjects).post(protect, createProject);

router.route("/me").get(protect, getMyProjects);

router.route("/:projectId/members/new").get(protect, getNewMembers);
router
  .route("/:projectId/members")
  .get(protect, getMembers)
  .put(protect, addMemeber);

router
  .route("/:id")
  .get(protect, getProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = router;
