// /server.js

require('dotenv').config(); // Carga las variables de entorno desde un archivo .env
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/sequelize'); // Importa la configuración de Sequelize

// Importar modelos
const User = require('./models/User');
const Attendance = require('./models/Attendance');

const app = express();

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Parsear cuerpos de solicitudes JSON

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/users', userRoutes);

// Sincronizar modelos con la base de datos
sequelize.sync({ alter: true }) // `alter: true` actualizará la base de datos para reflejar los modelos
  .then(() => console.log('Tablas sincronizadas con éxito'))
  .catch(err => console.error('Error al sincronizar tablas:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
