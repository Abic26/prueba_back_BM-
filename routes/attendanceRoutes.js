// /routes/attendanceRoutes.js

const express = require('express');
const { createAttendance, getAttendanceByUserId, getAllAttendances } = require('../controllers/attendanceController');
const { verifyToken } = require('../middleware/authMiddleware'); // Middleware de autenticación

const router = express.Router();

/**
 * Ruta para crear un nuevo registro de asistencia.
 * 
 * @route POST /create
 * @access Requiere autenticación
 */
router.post('/create', createAttendance);

/**
 * Ruta para obtener los registros de asistencia de un usuario específico.
 * 
 * @route GET /user/:user_id
 * @param {string} user_id - El ID del usuario para el cual se obtienen los registros de asistencia.
 * @access Requiere autenticación
 */
router.get('/user/:user_id', getAttendanceByUserId);

/**
 * Ruta para obtener todos los registros de asistencia.
 * 
 * @route GET /all
 * @access Requiere autenticación
 */
router.get('/all', getAllAttendances);

module.exports = router;