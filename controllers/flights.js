var Flight = require("../models/flight")

module.exports = {
  index,
  new: newFlight,
  create,
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
  console.log("create called")
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
