const express = require('express');
const { createAttendance, getAttendanceByUserId, getAllAttendances } = require('../controllers/attendanceController');
const { verifyToken } = require('../middleware/authMiddleware'); // Middleware de autenticación
const router = express.Router();

// Crear registro de asistencia
router.post('/create', createAttendance);

// Obtener registros de asistencia por `user_id`
router.get('/user/:user_id', getAttendanceByUserId);

// Obtener todos los registros de asistencia
router.get('/all', getAllAttendances);

module.exports = router;

