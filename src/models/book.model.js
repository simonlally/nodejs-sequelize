module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("Book", {
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
