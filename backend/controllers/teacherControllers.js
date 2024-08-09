const mongoose = require("mongoose");
const Teacher = require("../models/teacherModel");

const createTeacher = async (req, res) => {
  const { firstname, lastname, email, phonenumber, subject } = req.body;
  try {
    const teacher = await Teacher.create({
      firstname,
      lastname,
      email,
      phonenumber,
      subject,
    });

    await teacher.save();
    res.status(200).json(teacher);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ hireDate: -1 });
    res.json(teachers);
  } catch (error) {
    res.status(400).json({ msg: "Teacher fetching failed" });
  }
};

const getSingleTeacher = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId(id)) {
    console.log("teacher not found");

    return res.status(404);
  }
  try {
    const teacher = await Teacher.findById(id);
    res.json(teacher);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;

  if (!new mongoose.Types.ObjectId(id)) {
    console.log("teacher not found");

    return res.status(404);
  }

  try {
    const { firstname, lastname, email, phonenumber, subject } = req.body;
    await Teacher.findByIdAndUpdate(
      id,
      { firstname, lastname, email, subject, phonenumber },
      { new: true }
    );
    res.status(200);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  if (!new mongoose.Types.ObjectId(id)) {
    console.log("teacher not found");
    return res.status(404);
  }

  try {
    const teacher = await Teacher.findOneAndDelete(id);
    res.status(200).json(teacher);
  } catch (error) {}
  res.status(404).json(error.message);
};

module.exports = {
  createTeacher,
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
};
