const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User'); // Importar el modelo de usuario

// Definir modelo de Asistencia
const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Hace referencia al modelo de usuario
      key: 'id'
    },
    allowNull: false
  },
  hour: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'attendance',
  timestamps: false
});

// Establecer relaciones
User.hasMany(Attendance, { foreignKey: 'user_id' }); // Un usuario tiene muchas asistencias
Attendance.belongsTo(User, { foreignKey: 'user_id' }); // Una asistencia pertenece a un usuario

module.exports = Attendance;
