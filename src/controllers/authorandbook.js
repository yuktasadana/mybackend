const authorModel= require('../models/AuthorModel')
const BookModel = require('../models/Book1Model')

const createAuthor= async function(req,res){
    let data= req.body
    let authordata = await authorModel.create(data)
    res.send({msg:authordata})
}
const getAuthorData= async function (req, res) {
    let Author= await authorModel.find()
    res.send({msg: Author})
}

const createBook1 = async function(req,res){
    let data= req.body
    let booksdata = await BookModel.create(data)
    res.send({msg:booksdata})
}
const getBook1Data= async function (req, res) {
    let Books= await BookModel.find()
    res.send({msg: Books})
}
const filterbydata = async function(req,res){
    let author = await authorModel.findOne({author_name:"Chetan Bhagat"})
    let authorId = author.author_id
    let Books = await BooKModel.find({author_id:authorId})

    res.send({data:Books})

}
const updateBooks = async function(req ,res){
    let updateBooks = await BookModel.findOneAndUpdate(
        { name : "Two states"},
        {$set :{price :100}},
        {new :true}
    )
    let authorId = updateBooks.author_id

    let author = await authorModel.findOne(
        {author_id:authorId})

    res.send(({data:updateBooks.price , result :author.author_name}))
}

const findbyprice = async function(req,res){
    let finddata = await BookModel.find(
        {price : {$gte :50 ,
                    $lte :100}})
    
    let Array = []

    for(let j = 0 ; j<finddata.length ; j++){
        let id = finddata[j].author_id
        let authorName = await authorModel.findOne({author_id:id})
                                .select({author_name : 1 , author_id :1 , _id :0})

        Array.push(authorName)
    }
    res.send({data : Array})

}
    
    
    
    
module.exports.createAuthor=createAuthor
module.exports.createBook1=createBook1
module.exports.getAuthorData=getAuthorData
module.exports.getBook1Data=getBook1Data
module.exports.filterbydata=filterbydata
module.exports.updatedBooks=updateBooks
module.exports.findbyprice=findbyprice