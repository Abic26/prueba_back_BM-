// /config/sequelize.js

// Importamos el módulo 'sequelize' para interactuar con la base de datos
const { Sequelize } = require('sequelize');

// Configuramos una instancia de Sequelize para la conexión con PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,         // Host de la base de datos
  dialect: 'postgres',               // Dialecto de la base de datos, en este caso PostgreSQL
  port: process.env.DB_PORT,         // Puerto en el que la base de datos está escuchando
  logging: false,                    // Desactiva el registro de SQL en la consola
});

// Intentamos autenticar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos PostgreSQL con Sequelize'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Exportamos la instancia de Sequelize para usarla en otros archivos
module.exports = sequelize;
