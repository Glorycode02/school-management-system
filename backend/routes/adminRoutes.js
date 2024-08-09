const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getOneAdmin,
} = require("../controllers/adminControllers");

//create admin
router.post("/", createAdmin);

//get all admins
router.get("/", getAllAdmins);

//gett one single admin
router.get("/:id", getOneAdmin);

//update an admin
router.put("/:id", updateAdmin);

//delete an admin
router.delete("/:id", deleteAdmin);

module.exports = router;
