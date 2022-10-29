const mongoose = require ('mongoose');

const newauthorSchema = new mongoose.Schema({

authorName: String,
age: Number,
address: String,
rating: Number,

    
}, {timestamps:true}); 	/*{ 
    _id: ObjectId("61951bfa4d9fe0d34da86829"),
            authorName:"Chetan Bhagat",
            age:50,
            address:"New Delhi",
    rating: 2
        } */
    module.exports = mongoose.model('newauthor', newauthorSchema)

    
