const express = require('express');

const app = express();
const {
  getFileResponse,
  addNewMovie,
  updateMovie,
  deleteMovie,
} = require('./moviesData');

app.use(express.json());

app.get('/movies', async (_req, res) => {
  try {
    const movies = await getFileResponse();
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movieData = await getFileResponse();
    const foundMovie = movieData.find(({ movie }) => movie.includes(q));

    if (!foundMovie) {
      return res.status(404).json({ message: 'Movie not found!' });
    }

    return res.status(200).json({ foundMovie });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await getFileResponse();
    const foundMovie = movies.find((movie) => movie.id === Number(id));

    if (!foundMovie) {
      return res.status(404).json({ message: 'Movie not found!' });
    }
    return res.status(200).json({ foundMovie });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { body } = req;
    await addNewMovie(body);
    return res.status(201).json({ movie: body });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const {
      body: { movie, price },
      params: { id },
    } = req;

    const foundMovie = await updateMovie({ movie, price, id });

    if (!foundMovie) {
      return res.status(404).json({ message: 'Movie not found!' });
    }

    return res.status(200).json({ foundMovie });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteMovie(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = app;
