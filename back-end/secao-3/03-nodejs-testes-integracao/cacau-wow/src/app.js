const express = require('express');
const cacauTrybe = require('./cacauWow');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  return res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  return res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolates = chocolates.filter((cho) =>
    cho.name.includes(name)
  );
  if (filteredChocolates.length === 0) {
    return res.status(404).json(filteredChocolates);
  }
  return res.status(200).json(filteredChocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(id);
  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }
  return res.status(200).json({ chocolate });
});

app.put('/chocolates/:id', async (req, res) => {
  try {
    const {
      params: { id },
      body: { name, brandId },
    } = req;

    const chocolate = await cacauTrybe.updateChocolate({ id, name, brandId });

    if (!chocolate) {
      return res.status(404).json({ message: 'Chocolate not found' });
    }
    return res.status(200).json({ chocolate: { id, name, brandId } });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolateByBrandId(brandId);
  if (!chocolates) {
    return res.status(404).json({ message: 'Chocolates not found' });
  }
  return res.status(200).json({ chocolates });
});

module.exports = app;
