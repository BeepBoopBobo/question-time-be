const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, require: true },
    questions: [
        {
            id: { type: String, require: true },
            name: { type: String, require: true },
            value: { type: Number, require: true },
            image: String,
            used: Boolean,
            answers: [{ type: String, require: true, lowercase: true }],
            correct_answer: { type: String, require: true, lowercase: true },
        }
    ],
})

module.exports = mongoose.model("Category", categorySchema);