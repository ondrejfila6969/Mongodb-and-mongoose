const mongoose = require("mongoose");

const schema = mongoose.Schema({
    place: {type: String, required: true},
    green: {type: String, required: true},
    animal: {type: String, required: true},
})

module.exports = mongoose.model("Event2", schema);