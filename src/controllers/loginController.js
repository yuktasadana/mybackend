const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const login = async function(req,res){
    const {emailId, password} = req.body
    const getdata = await userModel.findOne({emailId:emailId, password:password})
    if(getdata==null) res.send("emailId and password not correct")

    console.log("login Successfully")
    const myToken = jwt.sign({email:emailId},'passwordSignature')
    res.send({status:true,data:myToken})

}
module.exports.login = login