const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema(
    {
        seat: {
            type: String,
            validate: /[A-F]\d{1,5}/,
        },
        price: {
            type: Number,
            min: 0,
        },
        flight: {
            type: ObjectId,
            ref: "Flight"
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Ticket", ticketSchema)