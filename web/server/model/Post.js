let mongoose = require('mongoose');

const postTable = new mongoose.Schema({
    author: { type: String },
    comment: { type: String, required: true },
})

module.exports = mongoose.model("Post", postTable);