const jwt = require("jsonwebtoken");

const authenticatetoken = async (req, res, next) => {
  const token = req.headers["Authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified;
    next();
  } catch (error) {
    res.json({ msg: "No token got" });
  }
};

module.exports = { authenticatetoken };
