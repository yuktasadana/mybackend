const express = require("express")
const router = express.Router()
const cryptoController = require("../Controller/cryptoController")

router.get('/assets',cryptoController.getcrypto)


module.exports = router