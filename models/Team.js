const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, require: true },
    color: { type: String, require: true },//hexval
    order: { type: Number, require: true, min: 0 },
    score: { type: Number, require: true, min: 0, default: 0 },
})

module.exports = mongoose.model("Team", teamSchema);