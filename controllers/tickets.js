var Ticket = require("../models/ticket")

module.exports = {
  new: newTicket,
  create,
}

async function newTicket(req, res) {
  res.render("tickets/new", { errorMsg: "", title: "Add Ticket", flightId: req.params.id })
}

async function create(req, res) {
    console.log("create called")
    req.body.flight = req.params.id
  try {
    await Ticket.create(req.body)
    console.log("ticket created")
    res.redirect(`../../flights/${req.params.id}`, {}, {title: "@@@@@@@@@@"})
  } catch (err) {
    console.log("error caught")
    res.render("flights/new", { errorMsg: err.message, title: "Error" })
  }
}
