module.exports = (app) => {
  const books = require("../controllers/book.controllers");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", books.create);

  // Get all Books
  router.get("/", books.findAll);

  // Get Book by ID
  router.get("/:id", books.findOne);

  // Update Book by ID
  router.put("/:id", books.update);

  // Delete Book by ID
  router.delete("/:id", books.delete);

  // Delete all existing Books
  router.delete("/", books.deleteAll);

  app.use("/api/books", router);
};
