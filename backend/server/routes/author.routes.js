const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:_id', AuthorController.findOneAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put('/api/authors/:_id', AuthorController.updateAuthor);
    app.delete('/api/authors', AuthorController.deleteManyAuthor);
    app.delete('/api/authors/:_id', AuthorController.deleteOneAuthor);
}

