const express = require("express");
const {
  getNotifications,
  updateNotification,
} = require("../controllers/notifications");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(protect, getNotifications);

router.route("/:id").put(protect, updateNotification);

module.exports = router;
