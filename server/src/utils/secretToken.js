const jwt = require("jsonwebtoken");
require("dotenv").config();
const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.secretToken, {
    expiresIn: "1d",
  });
};
module.exports = createSecretToken;
