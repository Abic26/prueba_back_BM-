// /controllers/userController.js

const User = require('../models/User'); // Importa el modelo User
const bcrypt = require('bcrypt'); // Para manejar el hashing de contraseñas

/**
 * Obtiene todos los usuarios.
 * 
 * @param {Object} req - La solicitud del cliente.
 * @param {Object} res - La respuesta al cliente.
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

/**
 * Obtiene un usuario por su ID.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `id` en los parámetros de la URL.
 * @param {Object} res - La respuesta al cliente.
 */
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    console.error('Error al obtener el usuario:', error); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

/**
 * Crea un nuevo usuario.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `username`, `password` y opcionalmente `role` en el cuerpo.
 * @param {Object} res - La respuesta al cliente.
 */
const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ error: 'El usuario ya existe' });

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await User.create({
      username,
      password: hashedPassword, // Guardar la contraseña encriptada
      role: role || 'employee', // Asignar el rol
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

/**
 * Actualiza un usuario existente.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `id` en los parámetros de la URL y opcionalmente `username`, `password` y `role` en el cuerpo.
 * @param {Object} res - La respuesta al cliente.
 */
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, role } = req.body;
  try {
    // Encontrar el usuario por ID
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Actualizar los campos
    user.username = username || user.username;
    if (password) {
      // Solo hashear la nueva contraseña si se proporciona una
      user.password = await bcrypt.hash(password, 10);
    }
    user.role = role || user.role;

    // Guardar los cambios
    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

/**
 * Elimina un usuario por su ID.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `id` en los parámetros de la URL.
 * @param {Object} res - La respuesta al cliente.
 */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Eliminar el usuario
    await user.destroy();

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
