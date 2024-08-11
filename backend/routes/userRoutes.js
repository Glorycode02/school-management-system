const express = require("express");
const { register, login } = require("../controllers/userControllers");
const { authenticatetoken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
