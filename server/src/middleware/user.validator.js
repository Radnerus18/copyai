const joi = require("joi");
const errorFunc = require("../utils/errorFunct");
const validation = joi.object({
  username: joi.string().min(3).max(25).trim(true).required(),
  email: joi.string().email().trim(true).required(),
  password: joi
    .string()
    .min(8)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
});

const validator = async (req, res, next) => {
  const { username, email, password } = req.body;
  const payload = {
    username: username,
    email: email,
    password: password,
  };
  const { error } = validation.validate(payload);
  if (error) {
    res.json(400);
    console.log("Error in validation", error);
    return res.json(errorFunc(true, "Error in validation"));
  } else {
    next();
  }
};
module.exports = validator;
