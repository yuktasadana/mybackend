const mongoose  = require('mongoose');

const Book1Schema = new mongoose.Schema({
    name:String,
    author_id:{
        type:Number,
        require:true,
    },
    price:Number,
    rating:Number,
},{timestamps:true});

module.exports = mongoose.model('Book1', Book1Schema)