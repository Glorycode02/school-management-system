const Class = require("../models/classModel");
const Teacher = require("../models/teacherModel"); 

const createClass = async (req, res) => {
  try {
    const { name, level, grade, teacher } = req.body;

    if (!name || !level || !grade || !teacher) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // Check if the teacher exists
    const existingTeacher = await Teacher.findById(teacher);
    if (!existingTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Create a new class with an empty students array
    const newClass = new Class({
      name,
      level,
      grade,
      teacher,
      students: [],
    });
    const savedClass = await newClass.save();
    res
      .status(201)
      .json({ message: "Class created successfully", class: savedClass });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllClasses = async (req, res) => {
  res.json({ msg: "All classes" });
};
module.exports = {
  createClass,
  getAllClasses,
};