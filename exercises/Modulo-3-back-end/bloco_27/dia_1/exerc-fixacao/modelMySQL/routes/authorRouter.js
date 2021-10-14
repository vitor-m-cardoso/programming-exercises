const router = require('express').Router();
const Author = require('../models/Author');

router.get('/', async (_req, res) => {
  try {
    const authors = await Author.getAll();
  
    res.status(200).json(authors);
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: "Not Found" });
  }
});

module.exports = router;
