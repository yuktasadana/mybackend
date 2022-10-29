const mongoose = require ('mongoose');

const newpublisherSchema = new mongoose.Schema({

    name: String,
    headQuarter: String,




},{timestamps:true});
/*{
		_id: ObjectId("61951bfa4d9fe0d34da86344"),
name: “Penguin”,
headQuarter: “New Delhi”,
}*/

module.exports = mongoose.model('newpublisher', newpublisherSchema)