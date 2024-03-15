const getTopSecret = (_req, res) => {
  try {
    return res.status(200).json({ secretInfo: 'Peter Parker is spider-man' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getTopSecret,
};
