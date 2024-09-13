const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Crear registro de asistencia
const createAttendance = async (req, res) => {
  const { user_id, hour, date } = req.body; // Extrae `user_id`, `hour` y `date` del cuerpo de la solicitud
  try {
    // Crear el registro de asistencia
    const attendance = await Attendance.create({ user_id, hour, date });
    res.status(201).json({ message: 'Asistencia registrada con éxito', attendance });
  } catch (err) {
    console.error('Error al registrar asistencia:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al registrar asistencia' });
  }
};



// Consultar registros de asistencia por `user_id`
const getAttendanceByUserId = async (req, res) => {
  const { user_id } = req.params; // Supone que `user_id` se envía como parámetro en la URL
  try {

    // Consultar registros de asistencia por `user_id`
    const attendanceRecords = await Attendance.findAll({ where: { user_id } });

    res.status(200).json({ attendance: attendanceRecords });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener registros de asistencia' });
  }
};

// Consultar todos los registros de asistencia
const getAllAttendances = async (req, res) => {
  try {
    const allAttendances = await Attendance.findAll({
      include: [{ model: User, attributes: ['id', 'username'] }], // Incluye datos del usuario
    });

    res.status(200).json({ attendance: allAttendances });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener todos los registros de asistencia' });
  }
};

module.exports = { createAttendance, getAttendanceByUserId, getAllAttendances };
