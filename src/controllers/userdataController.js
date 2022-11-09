const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res){
    try{
const data = req.body
const createuserdata = await userModel.create(data)
res.status(200).send({msg:createuserdata})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}

const getFetchdata = async function (req,res){
    try{
    const id=req.params.userId
    const fetchdata = await userModel.findOne({_id:id})
    if(!fetchdata) return res.status(401).send({status:false,msg:"invaild user id"})
    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}
const getUpdate = async function (req,res){
    try{
    const id=req.params.userId
    const userauth = await userModel.findById(id)
    if(!userauth) res.status(400).send({status:false,msg:"invalid userId"})

    const {lastName,age}= req.body
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})
    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}
const getDelete = async function (req,res){
    try{
    const id= req.params.userId
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.createUser = createUser;
module.exports.getFetchdata = getFetchdata;
module.exports.getUpdate = getUpdate;
module.exports.getDelete= getDelete;