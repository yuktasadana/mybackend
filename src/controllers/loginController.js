const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const login = async function(req,res){
    try{
    const {emailId, password} = req.body
    const getdata = await userModel.findOne({emailId:emailId, password:password})
    if(getdata==null) res.status(401).send("emailId and password not correct")

    console.log("login Successfully")
    const myToken = jwt.sign({email:emailId},'passwordSignature')
    res.status(200).send({status:true,data:myToken})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}
  
module.exports.login = login