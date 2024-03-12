const commentService = require('../services/comment.service');
const accountService = require('../services/account.service');

const getComments = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await commentService.getComments(id);

    return res.status(200).json(comments);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createComment = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    const account = await accountService.getAccountById(id);

    if (!account) {
      return res.status(404).json({ message: 'Account not found!' });
    }
    
    await commentService.createComment(id, message);

    return res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

module.exports = {
  getComments,
  createComment,
};
