const authorModel = require("../models/newauthorModel")
const publisherModel= require("../models/newpublisher")
 const bookModel= require("../models/bookModel")
const newauthorModel = require("../models/newauthorModel")
const newpublisher = require("../models/newpublisher")
const newbookModel = require("../models/newbookModel")

const createnewbook = async function(req,res) {
  let details = req.body
  if(!details.author_id)
  {
    console.log("author id is required")
    res.send("author id is required")
  }
  else if(!details.publisher)
  {
    console.log("publisher id is required")
    res.send("publisher id is required")
  }
  else 
  {
    let validauthordata = await newauthorModel.find()
    var count=0
    validauthordata.forEach(e => {
      if(e._id==details.author_id)
      {
        count++
      }

    })
    let validpublisherdata= await newpublisher.find()
    var count1 = 0
    validpublisherdata.forEach(e =>{
      if(e._id==details.publisher)
      {
        count1++
      }
    })
    if(count>0 && count1>0)
    {
      let authordetailsCreated = await newbookModel.create(details)
      res.send({data: authordetailsCreated})
    }
    else if(count==0 && count1>0)
    {
      console.log("author id is not valid")
      res.send("author id is not valid")
    }
    else if(count>0 && count1==0)
    {
      console.log("publisher id is not valid")
      res.send("publisher id is not valid")
    }
    else
    {
      console.log("author and publisher id is not valid")
      res.send("author and publisher id is not valid")
    }
  }

}
const getnewbooksdata = async function(req,res) {
 let newbooks = await newbookModel.find().populate("author_id").populate("publisher")
 res.send({data: newbooks})

}
const updatedata= async function(req,res){
  let bookdata= await newbookModel.find().populate("author_id").populate("publisher")
 bookdata.forEach(e=>{
  if(e.publisher.name=='penguin'|| e.publisher.name=='HarperCollins')
  {
    e.isHardCover = true
  }

  })
  res.send({data:bookdata})

}
const priceupdate = async function(req,res){
  let booksdata = await (await newbookModel.populate("author_id"))

  booksdata.forEach(e=>{
    if(e.author_id.ratings>3.5)
    {
      e.price=e.price+10
    }

  })
  res.send({msg:booksdata})
}









module.exports.createnewbook= createnewbook
module.exports.getnewbooksdata= getnewbooksdata
module.exports.updatedata= updatedata
module.exports.priceupdate=priceupdate