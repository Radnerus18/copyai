const home = require("../controller/defaultContoller");
const { addUser, loginUser } = require("../controller/user.controller");
const expressR = require("express");
const router = expressR.Router();

router.get("/", home);
router.post("/signup", addUser);
router.post("/login", loginUser);
module.exports = router;
