const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {type: String, required: true},
    date: {type: String, required: true},
    place: {type: String, required: true},
})

module.exports = mongoose.model("Event", schema);