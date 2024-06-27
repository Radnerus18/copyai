const home = require("../controller/defaultContoller");
const { addUser, loginUser } = require("../controller/user.controller");
const userValidation = require("../controller/user.validator");
const expressR = require("express");
const router = expressR.Router();

router.get("/", home);
router.post("/signup", userValidation, addUser);
router.post("/login", loginUser);
module.exports = router;
