const mongoose = require("mongoose");
const Admin = require("../models/adminModel");

// create admin
const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await Admin.create({
      name,
      email,
      password,
    });

    await admin.save();
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all admins
const getAllAdmins = async (req, res) => {
  try {
    const Admins = await Admin.find().sort({ createdAt: -1 });
    res.status(200).json(Admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get one Admin
const getOneAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);
    res.json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update admin
const updateAdmin = async (req, res) => {
  const { id } = req.params;

  const { name, email, password } = req.body;

  const updatedAdmin = await Admin.findByIdAndUpdate(
    id,
    { name, email, password },
    { new: true }
  );
  res.json(updatedAdmin);
};

//delete an admin
const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await Admin.findByIdAndDelete(id);
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
};
