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
    },
    {runValidators: true})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err))
}

module.exports.findOneAuthor = (req, res) => {
    Author.find({_id: req.params._id})
    .then(author => res.json(author))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id:req.params._id})
    .then(deleteOne => res.json(deleteOne))
    .catch(err => res.json(err))
}

module.exports.deleteManyAuthor = (req, res) => {
    Author.deleteMany()
    .then(deleteAll => res.json(deleteAll))
    .catch(err => res.json(err))
}