const router = require('express').Router();
const Books = require('../models/Books');

router.get('/', async (_req, res) => {
  try {
    const books = await Books.getAll();
  
    res.status(200).json(books);
  } catch (err) {
    res.status(404).json({ message: "Not Found" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const booksData = await Books.getAll();

    const getAuthorById = booksData.filter((b) => Number(b.authorId) === Number(id));
  
    if (getAuthorById.length < 1) return res.status(404).json({ message: "Not Found" });

    return res.status(200).json(getAuthorById);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
})

module.exports = router;
