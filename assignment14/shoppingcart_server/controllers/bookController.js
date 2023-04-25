const Book = require('../models/book');

exports.save = (req, res, next) => {
    const addedBook = new Book(null, req.body.title, req.body.description, req.body.price).save();
    res.status(201).json(addedBook);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
}

exports.deleteById = (req, res, next) => {
    res.json(Book.deleteById(req.params.bookId));
}

exports.edit = (req, res) => {
    const editedBook = new Book(req.params.bookId, req.body.title, req.body.description, req.body.price).edit();
    res.json(editedBook);
}

exports.getById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
  }

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}
    