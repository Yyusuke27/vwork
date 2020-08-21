const express = require("express");

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getNearDeadlineTasks,
  getRecentTasks,
} = require("../controllers/tasks");

const router = express.Router({ mergeParams: true });

const commentRouter = require("./comments");
const historyRouter = require("./histories");

const { protect } = require("../middleware/auth");

// 他のルーターに再度ルート
router.use("/:taskId/comments", commentRouter);
router.use("/:taskId/histories", historyRouter);

router.route("/").get(protect, getTasks).post(protect, createTask);

router.route("/near_deadline").get(protect, getNearDeadlineTasks);

router.route("/recent").get(protect, getRecentTasks);

router
  .route("/:id")
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
