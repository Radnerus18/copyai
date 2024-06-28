const errorFunc = require("../utils/errorFunct");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const VerifyUser = (req,res)=>{
    const {token} = req.params
    console.log('token',token)
    if(token){
        const decode = jwt.verify(token,process.env.secretToken)
        res.json(errorFunc(false,'User verified',decode))
        console.log(decode)
    }else{
        res.json(true,'Login failed')
    }
}
module.exports = VerifyUser