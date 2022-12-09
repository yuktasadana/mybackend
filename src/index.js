const express = require("express")
const {default:mongoose} = require('mongoose')
const route = require("./routes/route")

mongoose.set('strictQuery',true)

const app = express()



mongoose.connect("mongodb+srv://YuktaSadana:yuiopjkl@cluster0.ikfqj5s.mongodb.net/blockchain",{useNewUrlparser: true})

.then (()=> console.log("MongoDb is connected "))
.catch(err => console.log(err))


app.use ("/",route)

app.listen (process.env.PORT || 3000, function(){
        console.log("express is running on port "+ (process.env.PORT || 3000));
})
