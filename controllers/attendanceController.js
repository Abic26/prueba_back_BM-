// /controllers/attendanceController.js

const Attendance = require('../models/Attendance');
const User = require('../models/User');

/**
 * Crea un nuevo registro de asistencia.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `user_id`, `hour`, y `date` en el cuerpo.
 * @param {Object} res - La respuesta al cliente.
 */
const createAttendance = async (req, res) => {
  const { user_id, hour, date } = req.body; // Extrae `user_id`, `hour` y `date` del cuerpo de la solicitud
  
  try {
    // Crea el registro de asistencia
    const attendance = await Attendance.create({ user_id, hour, date });
    res.status(201).json({ message: 'Asistencia registrada con éxito', attendance });
  } catch (err) {
    console.error('Error al registrar asistencia:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al registrar asistencia' });
  }
};

/**
 * Obtiene los registros de asistencia de un usuario específico.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `user_id` en los parámetros de la URL.
 * @param {Object} res - La respuesta al cliente.
 */
const getAttendanceByUserId = async (req, res) => {
  const { user_id } = req.params; // Extrae `user_id` de los parámetros de la URL
  
  try {
    // Obtiene los registros de asistencia del usuario especificado
    const attendanceRecords = await Attendance.findAll({ where: { user_id } });
    res.status(200).json({ attendance: attendanceRecords });
  } catch (err) {
    console.error('Error al obtener registros de asistencia:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al obtener registros de asistencia' });
  }
};

/**
 * Obtiene todos los registros de asistencia.
 * 
 * @param {Object} req - La solicitud del cliente.
 * @param {Object} res - La respuesta al cliente.
 */
const getAllAttendances = async (req, res) => {
  try {
    // Obtiene todos los registros de asistencia, incluyendo los datos del usuario asociado
    const allAttendances = await Attendance.findAll({
      include: [{ model: User, attributes: ['id', 'username'] }], // Incluye datos del usuario
    });
    res.status(200).json({ attendance: allAttendances });
  } catch (err) {
    console.error('Error al obtener todos los registros de asistencia:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al obtener todos los registros de asistencia' });
  }
};

module.exports = { createAttendance, getAttendanceByUserId, getAllAttendances };
