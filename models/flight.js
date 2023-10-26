const mongoose = require("mongoose")

const Schema = mongoose.Schema

const arrivalSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "SEA",],
    },
    arrival: Date,
  }
)

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "Delta", "United", "Alaskan"],
    },
    airport: {
      type: String,
      default: "SEA",
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "SEA"],
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      default: function () {
        const currentDate = new Date()
        currentDate.setFullYear(currentDate.getFullYear() + 1)
        return currentDate
      },
    },
    arrivals: {
        type: [arrivalSchema]
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Flight", flightSchema)