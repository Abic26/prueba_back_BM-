require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const sequelize = require('./config/sequelize'); // Importa la configuración de Sequelize
const User = require('./models/User');
const Attendance = require('./models/Attendance');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true }) // `alter: true` actualizará la base de datos para reflejar los modelos
  .then(() => console.log('Tablas sincronizadas con éxito'))
  .catch(err => console.error('Error al sincronizar tablas:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
