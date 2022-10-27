const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id:{
        type:Number,
        require:true,

    },
    author_name:String,
    age:Number,
    address:String



})

module.exports=mongoose.model('author',authorSchema)