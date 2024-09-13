// /routes/userRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

/**
 * Ruta para obtener todos los usuarios.
 * 
 * @route GET /users
 * @access Público
 */
router.get('/', getAllUsers);

/**
 * Ruta para obtener un usuario por ID.
 * 
 * @route GET /users/:id
 * @param {string} id - El ID del usuario a obtener.
 * @access Público
 */
router.get('/:id', getUserById);

/**
 * Ruta para crear un nuevo usuario.
 * 
 * @route POST /users
 * @access Público
 */
router.post('/', createUser);

/**
 * Ruta para actualizar un usuario existente por ID.
 * 
 * @route PUT /users/:id
 * @param {string} id - El ID del usuario a actualizar.
 * @access Público
 */
router.put('/:id', updateUser);

/**
 * Ruta para eliminar un usuario por ID.
 * 
 * @route DELETE /users/:id
 * @param {string} id - El ID del usuario a eliminar.
 * @access Público
 */
router.delete('/:id', deleteUser);

module.exports = router;