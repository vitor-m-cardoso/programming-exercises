const fs = require('fs');
const path = require('path');

const { readFile, writeFile } = fs.promises;

const moviesPath = path.resolve(__dirname, './movies.json');

const getFileResponse = async () => {
  try {
    const moviesData = JSON.parse(await readFile(moviesPath));
    return moviesData;
  } catch (err) {
    return err.message;
  }
};

const writeMovieData = async (data) => {
  await writeFile(moviesPath, JSON.stringify(data));
};

const addNewMovie = async (data) => {
  try {
    const movieData = await getFileResponse();
    movieData.push({
      id: movieData.length + 1,
      ...data,
    });

    await writeMovieData(movieData);
  } catch (err) {
    return err.message;
  }
};

const updateMovie = async (data) => {
  try {
    const { id, movie, price } = data;

    const movieData = await getFileResponse();
    const foundMovie = movieData.find((oneMovie) => oneMovie.id === Number(id));

    foundMovie.movie = movie;
    foundMovie.price = price;

    await writeMovieData(movieData);
    return foundMovie;
  } catch (err) {
    return err.message;
  }
};

const deleteMovie = async (id) => {
  try {
    const movies = await getFileResponse();
    const arrayPosition = movies.findIndex((movie) => movie.id === Number(id));
    movies.splice(arrayPosition, 1);
    await writeMovieData(movies);
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getFileResponse,
  addNewMovie,
  updateMovie,
  deleteMovie,
};
