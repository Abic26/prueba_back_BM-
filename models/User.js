// /models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

/**
 * Define el modelo de Usuario.
 */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false, // Asegura que el ID no pueda ser nulo
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false, // El nombre de usuario es obligatorio
    unique: true,     // El nombre de usuario debe ser único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // La contraseña es obligatoria
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false, // El rol es obligatorio
    defaultValue: 'employee', // Valor por defecto para el rol
  },
}, {
  tableName: 'users', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva los campos `createdAt` y `updatedAt`
});

module.exports = User;
