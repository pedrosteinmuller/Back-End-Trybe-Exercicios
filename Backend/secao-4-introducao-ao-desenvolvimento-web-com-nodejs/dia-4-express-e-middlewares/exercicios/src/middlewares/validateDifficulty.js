const validateDifficulty = (req, res, next) => {
  const {
    description: { difficulty },
  } = req.body;
  const classificationsDifficulty = ['Fácil', 'Médio', 'Difícil'];
  if(!classificationsDifficulty.includes(difficulty)) {
    res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
  next();
};

module.exports = validateDifficulty;