const validate = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` });
  }
};

const validateDescription = (req, res, next) => {
  // const { description } = req.body;
  // if (!description) {
  //   res.status(400).json({ message: "O campo description é obrigatório" });
  // }
  // if (!description.createdAt) {
  //   res.status(400).json({ message: "O campo createdAt é obrigatório" });
  // }
  // if (!description.rating) {
  //   res.status(400).json({ message: "O campo rating é obrigatório" });
  // }
  // if (!description.difficulty) {
  //   res.status(400).json({ message: "O campo difficulty é obrigatório" });
  // }
  // next();
  const { description } = req.body;

  return (
    validate(description, res, 'description') ||
    validate(description.createdAt, res, 'createdAt') ||
    validate(description.rating, res, 'rating') ||
    validate(description.difficulty, res, 'difficulty') ||
    next()
  );
};

module.exports = validateDescription;
