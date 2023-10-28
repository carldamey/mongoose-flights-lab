var Ticket = require("../models/ticket")

module.exports = {
    new: newTicket,
}

function newTicket(req, res) {
    console.log("newTicket called")
    res.render("tickets/new", {errorMsg: "", title: "Add Ticket"})
}