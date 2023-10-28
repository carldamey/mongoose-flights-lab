var Flight = require("../models/flight")
var Ticket = require("../models/ticket")

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  update,
}

async function index(req, res) {
  try {
    res.render("flights/index", {
      title: "All Flights",
      flights: await Flight.find({}),
    })
  } catch (err) {
    res.render("flights/index", {
      title: "error",
      errorMsg: err.message,
    })
  }
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "", title: "New Flight" })
}

async function create(req, res) {
  try {
    if (!req.body.airline) req.body.airline = undefined
    if (!req.body.airport) req.body.airport = undefined
    if (!req.body.departs) req.body.departs = undefined
    await Flight.create(req.body)
    res.redirect(
      "flights/",
      {},
      { title: "All Flights", flights: await Flight.find({}) }
    )
  } catch (err) {
    res.render("flights/new", { errorMsg: err.message, title: "Error" })
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
    res.render("flights/show", {
      title: `${flight.flightNo} - Details`,
      flight,
      tickets
    })
  } catch(err) {
    console.error(err)
  }
}

async function update(req, res) {
  const filter = { _id: req.params._id }
  const update = {}
}
