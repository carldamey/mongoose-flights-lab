var Flight = require("../models/flight")

module.exports = {
    index,
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