const Student = require("../models/studentModel");
const Class = require("../models/classModel"); // Adjust the path as necessary

// Controller function to create a new student
const createStudent = async (req, res) => {
  try {
    const existingClass = await Class.findById(Class);

    if (!existingClass) {
      res.status(404).json({ msg: "Class not found" });
    }
    const {
      FirstName,
      LastName,
      DateOfBirth,
      Gender,
      Address,
      Email,
      PhoneNumber,
      Class,
    } = req.body;

    // Validate required fields
    if (
      !FirstName ||
      !LastName ||
      !DateOfBirth ||
      !Gender ||
      !Email ||
      !Class
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // Create a new student
    const newStudent = new Student({
      FirstName,
      LastName,
      DateOfBirth,
      Gender,
      Address,
      Email,
      PhoneNumber,
      Class,
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();

    // Respond with the created student data
    res
      .status(201)
      .json({ message: "Student created successfully", student: savedStudent });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createStudent };
