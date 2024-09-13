const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  logging: false, // Desactiva el registro de SQL en consola
});

sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos PostgreSQL con Sequelize'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;
