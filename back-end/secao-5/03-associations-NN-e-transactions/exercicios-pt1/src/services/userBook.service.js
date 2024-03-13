const { User, Book } = require('../models');

const gerUsersBooksById = async (id) => {
  const user = await User.findOne({
    where: { id },
    include: [{ model: Book, as: 'books', through: { attributes: [] } }],
  });
  return user;
}

module.exports = {
  gerUsersBooksById,
};
