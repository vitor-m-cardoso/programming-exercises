require('dotenv').config();
const express = require('express');

const app = express();

const authorRouter = require('./routes/authorRouter');
const booksRouter = require('./routes/booksRouter');

app.use(express.json());
app.use('/authors', authorRouter);
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
