const express = require("express");

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

router.route("/").get(protect, getTasks).post(protect, createTask);

router
  .route("/:id")
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;