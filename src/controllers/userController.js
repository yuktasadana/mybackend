const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    //let tokenDataInHeaders= req.headers.token
    //console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }
 const test1 = async function(req,res){
    console.log("code run successfully")
    res.send({msg: "ip address come successfully"})
 }
 


















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.test1= test1