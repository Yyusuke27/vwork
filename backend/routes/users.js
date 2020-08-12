const express = require("express");
const { updateUser } = require("../controllers/users");

const { protect } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router.route("/:id").put(protect, updateUser);

module.exports = router;
