
const { Sequelize } = require('sequelize');
const config = require('./config.json'); // Path to config.json
const environment = process.env.NODE_ENV || 'development'; // Default to 'development' if not set
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: console.log, // Enable logging for debugging in development
// });

// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully.'))
//   .catch((error) => console.error('Unable to connect to the database:', error));

// module.exports = sequelize;

const sequelize = new Sequelize(config[environment].database, config[environment].username, config[environment].password, {
  host: config[environment].host,
  dialect: config[environment].dialect,
  logging: console.log, // Enable logging for debugging in development
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
