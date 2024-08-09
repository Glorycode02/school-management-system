const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: Date,
      required: true,
    },
    Gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    Address: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    PhoneNumber: {
      type: String,
      required: false,
    },
    Class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    EnrollmentDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
