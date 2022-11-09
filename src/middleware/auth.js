const jwt= require('jsonwebtoken')

const auth =async function(req,res,next){

    try{
        const header = req.headers["x-auth-token"]
    if(header){
        // const token = req.headers["x-auth-token"]
        const decoded = await jwt.verify(header,'passwordSignature')
        console.log(decoded)
        req.id=decoded.id
   
        // console.log(req)
        if(!decoded)  
        {
            return res.status(401).send({status:false, msg:"invalid token"}) 
        }
        next()
    }

    else{
        console.log("x-auth-token key is required in headers")
        res.status(401).send({msg:"x-auth-token key is required in headers"})
    }
    }
    catch(err){
        console.log({status:false,msg:err})
        res.status(500).send({status:false,msg:err})

    }
}


const authorization = async function (req,res,next){


try{
    const id = req.id
    const userId = req.params.userId

    if(userId!=id) return res.status(403).send({status:false,msg:"Unauthorised user"})

    next()
}
catch(error){
    console.log({status:false,msg:error})
    res.status(500).send({status:false,msg:error})

}
}



module.exports.auth = auth
module.exports.authorization= authorization