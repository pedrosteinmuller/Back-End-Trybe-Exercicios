const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const teamsRouter = require('./routes/teamsRouter');
const cors = require('cors');

const validateTeam = require('./middleware/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();
app.use(morgan('dev'));
app.use(express.static('/images'));
app.use(express.json());
app.use('/teams', teamsRouter);
app.use(cors());

// let nextId = 3;
// const teams = [
//   { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
//   { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
// ];

// Exercicio 1
// const existingId = (req, res, next) => {
//   const { id }  = Number(req.params);
//   if ( teams.some((item) => item.id === id)){
//     return next();
//   } else {
//     res.sendStatus(404);
//   }
// }

// app.use((req, res) => res.sendStatus(404));
// app.use((err, _req, _res, next) => {
//   console.error(err.stack);
//   // passa o erro para o próximo middleware
//   next(err);
// });
// app.use((err, req, res, _next) => {
//   res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
// });

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;