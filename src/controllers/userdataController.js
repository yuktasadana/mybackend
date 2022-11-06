const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res){
const data = req.body
const createuserdata = await userModel.create(data)
res.send({msg:createuserdata})

};
const getFetchdata = async function (req,res){
    const id=req.params.userId
    const fetchdata = await userModel.findOne({_id:id})
    res.send(fetchdata)

}
const getUpdate = async function (req,res){
    const id=req.params.userId
    const userauth = await userModel.findById(id)
    if(!userauth) res.send({status:false,msg:"invalid userId"})

    const {lastName,age}= req.body
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})
    res.send(fetchdata)
}
const getDelete = async function (req,res){
    const id= req.params.userId
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
    res.send(fetchdata)
}
module.exports.createUser = createUser;
module.exports.getFetchdata = getFetchdata;
module.exports.getUpdate = getUpdate;
module.exports.getDelete= getDelete;