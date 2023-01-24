require('dotenv').config();

const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'books_database_development',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'books_database_test',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'books_database_production',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
};

console.log(config)

module.exports = config