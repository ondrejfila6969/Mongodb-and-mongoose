const mongoose = require("mongoose");

const schema = mongoose.Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    motor: {type: String, required: true}
})

module.exports = mongoose.model("Car", schema);