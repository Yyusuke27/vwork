const express = require("express");

const { createComment } = require("../controllers/comments");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

router.route("/").post(protect, createComment);

module.exports = router;
