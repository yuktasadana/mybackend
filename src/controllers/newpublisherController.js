const publisherModel = require ("../models/newpublisher")

const createnewpublisher = async function (req,res){
    let newpublisher = req.body
    let newpublishercreated = await publisherModel.create(newpublisher)
    res.send({data:newpublishercreated})

}
/*const getpublisherdata = async function (req,res){
    let publisher = await publisherModel.find()
    res.send({data:publisher})

}*/
module.exports.createnewpublisher= createnewpublisher
  //  module.exports.getpublisherdata= getpublisherdata
