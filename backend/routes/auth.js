const express = require("express");
const {
  signup,
  login,
  currentUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/signup", signup);

router.post("/login", login);

router.get("/current", protect, currentUser);

router.post("/forgotpassword", forgotPassword);

router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
