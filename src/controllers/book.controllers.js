const db = require("../models");
const Book = db.books;

// Create and Save a new Book
exports.create = (req, res) => {
  // validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "content cannot be empty",
    });
  }

  const newBook = {
    title: req.body.title,
    author: req.body.author,
  };

  Book.create(newBook)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

// Retrieve all Books from the database
exports.findAll = (req, res) => {
  Book.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

// Find a single Book with an id
exports.findOne = (req, res) => {};

// Update a Book by the id in the request
exports.update = (req, res) => {};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Books from the database
exports.deleteAll = (req, res) => {};
