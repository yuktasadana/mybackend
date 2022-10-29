const authorModel = require ("../models/newauthorModel")

const createnewauthor = async function (req,res) {
    let newAuthor = req.body
    let newauthorcreated = await authorModel.create(newAuthor)
    res.send({data: newauthorcreated})


}
/*const getnewauthorsdata = async function (req,res) {
    let authors = await authorModel.find()
    res.send({data: authors})

}*/
module.exports.createnewauthor= createnewauthor
//module.exports.getnewauthorsdata=getnewauthorsdata