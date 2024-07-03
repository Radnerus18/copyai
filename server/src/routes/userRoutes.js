const home = require("../controller/defaultContoller");
const { addUser, loginUser } = require("../controller/user.controller");
const userValidation = require("../middleware/user.validator");
const userVerification = require('../middleware/user.verification');
const expressR = require("express");
const router = expressR.Router();
const fileUpload = require('../middleware/fileUpload')
router.get("/", home);
router.post("/signup", userValidation, addUser);
router.post("/login", loginUser);
router.get("/verify/:token", userVerification);
router.post('/upload',fileUpload.single('file'),(req,res)=>{
    return res.json({msg:'File Uploaded'})
})
module.exports = router;
