// /routes/authRoutes.js

const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

/**
 * Ruta para registrar un nuevo usuario.
 * 
 * @route POST /register
 * @access Público
 */
router.post('/register', register);

/**
 * Ruta para iniciar sesión de un usuario existente.
 * 
 * @route POST /login
 * @access Público
 */
router.post('/login', login);

module.exports = router;