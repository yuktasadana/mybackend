const userModel =  require("../models/user1Model")

const createnewuser = async function (req,res) {
    let newUser = req.body
    let newusercreated = await userModel.create(newUser)
    res.send({data: newusercreated})


}

module.exports.createnewuser= createnewuser