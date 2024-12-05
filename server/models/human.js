const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    height: {type: Number, required: true}
})

module.exports = mongoose.model("Human", Schema);