// /config/db.js

// Importamos el módulo 'pg' para la conexión con PostgreSQL
const { Pool } = require('pg');

// Creamos una instancia de Pool para manejar la conexión con la base de datos
const pool = new Pool({
  user: process.env.DB_USER, // Usuario de la base de datos
  host: process.env.DB_HOST, // Host de la base de datos
  database: process.env.DB_NAME, // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
  port: process.env.DB_PORT, // Puerto en el que la base de datos está escuchando
});

// Intentamos conectar con la base de datos y manejar errores
pool.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Exportamos el pool para usarlo en otras partes de la aplicación
module.exports = pool;
