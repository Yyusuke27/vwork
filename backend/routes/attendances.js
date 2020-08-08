const express = require("express");

const {
  getAttendances,
  getAttendance,
  updateAttendance,
  getTodayAttendance,
} = require("../controllers/attendances");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

router.route("/").get(protect, getAttendances);
router.route("/today").get(protect, getTodayAttendance);
router.route("/:id").get(protect, getAttendance).put(protect, updateAttendance);

module.exports = router;
