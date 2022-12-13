const express = require("express");
const generateToken = require('./utils/generateToken');
// const validateName = require("./middlewares/validateName");
// const validatePrice = require("./middlewares/validatePrice");
// const validateDescription = require("./middlewares/validateDescription");
// const validateCreatedAt = require("./middlewares/validateCreatedAt");
// const validateRating = require("./middlewares/validateRating");
// const validateDifficulty = require("./middlewares/validateDifficulty");
const validateAuth = require("./middlewares/auth");
const app = express();

app.use(express.json());

// Exercicio 2

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const userData = [email, password, firstName, phone ];
  if (userData.includes(undefined)){
    return res.status(401).json({ message: "Campos ausentes!" });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

app.post('/activities', validateAuth, (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

// Exercicio 1
// app.post(
//   "/activities",
//   validateName,
//   validatePrice,
//   validateDescription,
//   validateCreatedAt,
//   validateRating,
//   validateDifficulty,
//   (_req, res) => {
//     res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
//   }
// );

module.exports = app;
