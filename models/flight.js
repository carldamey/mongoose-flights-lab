const mongoose = require("mongoose")

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "Delta", "United", "Alaskan"],
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "SEA"],
        default: "SEA",
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            const currentDate = new Date()
            currentDate.setFullYear(currentDate.getFullYear() + 1)
            return currentDate
        }
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Flight", flightSchema)