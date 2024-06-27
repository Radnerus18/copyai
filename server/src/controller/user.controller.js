const User = require("../models/userSchema");
const errorFunc = require("../utils/errorFunct");
const joi = require("joi");
const securedPassword = require("../utils/securePassword");
const bcrypt = require("bcryptjs");
const createSecretToken = require("../utils/secretToken");
const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      email: email,
    });
    if (existingUser) {
      return res.json(errorFunc(true, "User Already Exists"));
    }
    const hashPwd = await securedPassword(password);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashPwd,
    });
    const token = createSecretToken(newUser._id);

    if (newUser) {
      res.cookie("token", token, {
        httpOnly: false,
        withCredentials: true,
      });
      return res.json(errorFunc(false, "User Created", newUser));
    } else {
      res.status(403);
      return res.json(errorFunc(true, "Error in creating user"));
    }
  } catch (err) {
    res.status(400);
    console.log("Error in Adding user", err);
    return res.json(errorFunc(true, "Error in Adding user"));
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });

    const passwordMatch = await bcrypt.compare(password, user.password);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      withCredentials: true,
    });
    if (!user) {
      return res.json(errorFunc(true, "Sign Up First"));
    }
    if (passwordMatch) {
      console.log(token);
      res.status(200);
      return res.json(errorFunc(false, "Loggin Successful", user));
    } else {
      return res.json(errorFunc(true, "Wrong Password"));
    }
  } catch (err) {
    res.status(400);
    console.log("Error in logging user", err);
    return res.json(errorFunc(true, "Error in logging in"));
  }
};
module.exports = {
  addUser: addUser,
  loginUser: loginUser,
};
