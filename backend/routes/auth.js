const express = require("express");
const { signup, login, currentUser } = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/signup", signup);

router.post("/login", login);

router.get("/current_user", protect, currentUser);

module.exports = router;
