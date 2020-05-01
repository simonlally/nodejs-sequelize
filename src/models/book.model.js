module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
  });

  return Book;
};
