const axios = require('axios')

const getmemes = async function(req,res){
    try{
        let options ={
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({status:true,msg:data})
    } catch (err){
        res.status(500).send({msg: err.message})
    }
}
let creatememes = async function(req,res){
    try{

        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options ={
            method : "get",
            url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let createdMemes = await axios(options)

        let data = createdMemes.data

        res.status(200).send({status : true , message : data})
    }
    catch(error){
        res.status(500).send({status : false , error : error.message})
    }
}


module.exports.getmemes=getmemes
module.exports.creatememes=creatememes