const { isValidObjectId} = require('mongoose')


/*const newmiddleware = function(req, res, next){
   const body = req.body
   const headers = req.headers
   const freeUser = headers.isfreeappuser
    
   if(freeUser){
     console.log("free app user is present")
     next()
}
else{
 console.log("free app user is not present")
 return res.send({data: "free app user is mandatory"})
}
}*/
const headerMiddleware = function(req, res, next){
   let header =req.headers.isfreeappuser
    const newHeader = header=="true" ? true :false
    const isFreeAppUser = req.isFreeAppUser=newHeader
    
   if(header)
   {
    console.log(" header is added successfully")
    next()
   }
   else
   {
    console.log("header isfreeappuser is required")
    res.send({msg:"missing a mandatory header"})
   }
   
}

/*const middlewareorder = function(req,res,next){
   let userId = req.body.userId
   let productId = req.body.productId
   if(!isValidObjectId(userId)){
      return res.send({msg: "not valid userId"})
   }
   if(!isValidObjectId(productId)){
      return res.send({msg: "not a valid productId"})

   }
   next()
}*/
//module.exports.newmiddleware= newmiddleware
module.exports.headerMiddleware= headerMiddleware
//module.exports.middlewareorder= middlewareorder