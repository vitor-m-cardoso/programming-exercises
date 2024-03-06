const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(404).json({ message: 'Missing "title"!' });
  }
  if (title.length < 3) {
    return res.status(422).json({ message: '"title" length must be greater than or equal 3' });
  }
  next();
}

const validateAuthor = (req, res, next) => {
  const { author } = req.body;
  if (!author) {
    return res.status(404).json({ message: 'Missing "author"!' });
  }
  next();
};

const validatePageQuantity = (req, res, next) => {
  const { pageQuantity } = req.body;
  if (!pageQuantity && pageQuantity !== 0) {
    return res.status(404).json({ message: 'Missing "pageQuantity"' });
  }
  if (typeof pageQuantity !== 'number') {
    return res.status(422).json({ message: '"pageQuantity" must be a number' });
  }
  if (pageQuantity < 0) {
    return res.status(422).json({ message: '"pageQuantity" must be greater than or equal 0' });
  }
  next();
}

module.exports = {
  validateTitle,
  validateAuthor,
  validatePageQuantity,
};
