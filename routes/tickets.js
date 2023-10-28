var express = require("express")
var router = express.Router()
var ticketsCtrl = require("../controllers/tickets")

router.get("/new/:id", ticketsCtrl.new)

module.exports = router