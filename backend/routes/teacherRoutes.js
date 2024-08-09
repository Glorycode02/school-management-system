const express = require("express");
const {
  createTeacher,
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherControllers");
const router = express.Router();

router.get("/", getAllTeachers);

//create a new teacher
router.post("/", createTeacher);

//getone teacher
router.get("/:id", getSingleTeacher);

//update a teacher
router.put("/:id", updateTeacher);

//delete a teacher
router.delete("/:id", deleteTeacher);


module.exports = router;