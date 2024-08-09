const express = require("express");
const { createStudent } = require("../controllers/studentControllers");
const router = express.Router();

//create a new a new student
router.post("/", createStudent);

module.exports = router;
