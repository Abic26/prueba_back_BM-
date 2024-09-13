// /models/Attendance.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User'); // Importa el modelo User

/**
 * Define el modelo de Asistencia.
 */
const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false, // Asegúrate de que el campo no sea nulo
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Hace referencia al modelo User
      key: 'id',
    },
    allowNull: false, // El campo `user_id` no puede ser nulo
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false, // El campo `hour` debe ser obligatorio
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false, // El campo `date` debe ser obligatorio
  },
}, {
  tableName: 'attendance', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva los campos `createdAt` y `updatedAt`
});

/**
 * Establece las relaciones entre los modelos.
 */
User.hasMany(Attendance, { foreignKey: 'user_id' }); // Un usuario tiene muchas asistencias
Attendance.belongsTo(User, { foreignKey: 'user_id' }); // Una asistencia pertenece a un usuario

module.exports = Attendance;
