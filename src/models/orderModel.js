const mongoose = require('mongoose')
 
const orderSchema = new mongoose.Schema({
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user1"
   },
   productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product"

   },
   amount:Number,

  isFreeAppUser: Boolean,
   date: {
    type: Date,
   },
},{timestamps: true});

module.exports = mongoose.model('order', orderSchema)