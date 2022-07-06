const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/userController");
const { tokenHandler } = require("../middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", tokenHandler, getProfile);

module.exports = router;
