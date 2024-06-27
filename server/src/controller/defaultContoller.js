const errorFunc = require("../utils/errorFunct");

const defaultController = async (_req, res) => {
  try {
    // Perform some operations here
    const userData = { name: "Surendar", role: "Developer" };
    const result = errorFunc(false, "Welcome Home", userData);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred:", error);
    const result = errorFunc(true, "An error occurred");

    res.status(500).json(result);
  }
};

module.exports = defaultController;
