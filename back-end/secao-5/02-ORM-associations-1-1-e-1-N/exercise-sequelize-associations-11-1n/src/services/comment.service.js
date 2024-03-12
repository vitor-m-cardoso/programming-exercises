const { Comment } = require('../models');

const getComments = async (id) => {
  const comments = await Comment.findAll({
    where: { accountId: id },
  });

  return comments;
};

const createComment = async (id, message) => {
  const newComment = {
    message,
    upvoting: 0,
    downvoting: 0,
    accountId: +id,
  };
  const createdComment = await Comment.create(newComment);

  return createdComment;
};

module.exports = {
  getComments,
  createComment,
};
