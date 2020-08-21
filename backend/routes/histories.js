const express = require("express");

const { getHistories } = require("../controllers/histories");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

router.route("/").get(protect, getHistories);

module.exports = router;
