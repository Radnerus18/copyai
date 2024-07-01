const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const errorFunc = require("../utils/errorFunct");
require("dotenv").config();

const VerifyUser = (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.json(errorFunc(true, "Login failed")); // Return early for invalid token
  }

  jwt.verify(token, process.env.secretToken, async (err, decodedToken) => {
    if (err) {
      return res.json(errorFunc(true, "Unauthorized"));
    }

    try {
      const user = await User.findById(decodedToken.userId);
      if (!user) {
        return res.json(errorFunc(true, "User not found"));
      }

      console.log("User:", user);
      res.json(errorFunc(false, "User verified", user));
    } catch (error) {
      console.error("Error in verification:", error);
      res.json(errorFunc(true, "Server error"));
    }
  });
};

module.exports = VerifyUser;
