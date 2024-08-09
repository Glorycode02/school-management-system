const express = require("express");
const {
  getAllClasses,
  createClass,
} = require("../controllers/classControllers");
const router = express.Router();

router.post("/", createClass);
router.get("/", getAllClasses);

module.exports = router;
