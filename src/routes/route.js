const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")
const userdataController = require("../controllers/userdataController")
const loginController = require("../controllers/loginController")
const authentication = require("../Middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/users", userController.createUser  )

//router.post("/login", userController.loginUser)

//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)

//router.put("/users/:userId", userController.updateUser)
router.post("/userdata", userdataController.createUser)
router.post("/login", loginController.login)
router.get("/userdata/:userId",authentication.auth, userdataController.getFetchdata)
router.put("/userdata/:userId", authentication.auth, userdataController.getUpdate)
router.delete("/userdata/:userId", authentication.auth, userdataController.getDelete)



module.exports = router;