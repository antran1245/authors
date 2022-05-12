const Author = require('../models/author.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
    .then(author => res.json(author))
    .catch(err => res.json(err))
}

