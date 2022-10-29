const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorController= require("../controllers/newauthorController")
const newpublisherController= require("../controllers/newpublisherController")
const newbookController = require("../controllers/newbookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.post("/createnewauthor", newauthorController.createnewauthor)
//router.get("/getnewauthorsdata", newauthorController.getnewauthorsdata)
router.post("/createnewpublisher", newpublisherController.createnewpublisher)
//router.get("/getpublisherdata", newpublisherController.getpublisherdata)
router.post("/createnewbook", newbookController.createnewbook)
router.get("/getnewbooksdata", newbookController.getnewbooksdata)
router.put("/updatedata",newbookController.updatedata)
router.put("/priceupdate", newbookController.priceupdate)

module.exports = router;