require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authenticatetoken = require("./middlewares/authMiddleware.js");
const port = process.env.PORT || 5000;
const cors = require("cors")

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.once("open", () => console.log("Mongodb connected"));
db.on("error", (err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/students", require("./routes/studentRoutes.js"));
app.use("/api/teachers", require("./routes/teacherRoutes.js"));
app.use("/api/admin", require("./routes/adminRoutes.js"));
app.use("/api/classes", require("./routes/classRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
