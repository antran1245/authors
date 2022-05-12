const const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Required at least 3 characters."],
        required: true
    },
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

