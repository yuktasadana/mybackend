const mongoose = require ('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema({

    name: String,
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newauthor"
},
  price: Number,
  ratings: Number,
   
   publisher: {
    type: mongoose.Schema.Types.ObjectId,
  ref: "newpublisher"
},
 isHardCover : {
    type: Boolean,
    default: false

 },






},{timestamps:true});
/*{
    _id: ObjectId("61951bfa4d9fe0d34da86344"),
name:"Two states",
    author:"c",
price:50,
    ratings:4.5,
    publisher: "61951bfa4d9fe0d34da84523"
}*/

module.exports = mongoose.model('newbook', newbookSchema)
