const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")


const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.post("/createBook", async function(req,res) {
    let bookList = req.body
let savedbookList= await UserModel.create(bookList)
res.send({booklist: savedbookList})

} )



router.get("/getUsersData", UserController.getUsersData)

router.get("/getBooksData", async function (req,res){
    
        let allBooks= await UserModel.find()
        res.send({getbooklist: allBooks})
    
})


module.exports = router;