var Flight = require("../models/flight")

module.exports = {
    index,
    new: newFlight,
}

async function index(req, res) {
    try {
        res.render("flights/index", {
            title: "All Flights",
            flights: await Flight.find({}),
        })
    } catch(err) {
        res.render("flights/index", {
            title: "error",
            errorMsg: err.message,
        })
    }
}

function newFlight(req, res) {
    res.render("flights/new", {errorMsg: "", title: "New Flight"})
}