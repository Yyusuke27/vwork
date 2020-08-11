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

const { protect } = require("../middleware/auth");

router.route("/").get(protect, getTasks).post(protect, createTask);

router.route("/near_deadline").get(protect, getNearDeadlineTasks);

router.route("/recent").get(protect, getRecentTasks);

router
  .route("/:id")
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
