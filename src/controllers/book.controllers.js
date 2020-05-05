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
exports.findOne = (req, res) => {
  const id = req.params.id;

  Book.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving book with id: ${id}`,
      });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Book updated successfully",
        });
      } else {
        res.send({ message: "Something went wrong" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Update failed",
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Book.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Book deleted successfully" });
      } else {
        res.send({ message: "Deletion failed" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Deletion failed",
      });
    });
};

// Delete all Books from the database
exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Books were deleted successfully` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while deleting all Books",
      });
    });
};
