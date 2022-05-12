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

module.exports.findAllAuthor = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err))
}

module.exports.findOneAuthor = (req, res) => {
    Author.find({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
}

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then(deleteOne => res.json(deleteOne))
    .catch(err => res.json(err))
}
