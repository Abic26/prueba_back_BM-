// /controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Registra un nuevo usuario.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `username`, `password` y opcionalmente `role` en el cuerpo.
 * @param {Object} res - La respuesta al cliente.
 */
const register = async (req, res) => {
  const { username, password, role } = req.body;
  
  try {
    // Hashea la contraseña del usuario
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: role || 'employee', // Asigna el rol 'employee' por defecto si no se proporciona
    });

    // Responde con éxito y los datos del nuevo usuario
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (err) {
    console.error('Error al registrar usuario:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

/**
 * Inicia sesión de un usuario.
 * 
 * @param {Object} req - La solicitud del cliente, debe contener `username` y `password` en el cuerpo.
 * @param {Object} res - La respuesta al cliente.
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Busca al usuario por su nombre de usuario
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Genera un token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET, // Asegúrate de que JWT_SECRET esté definido en tus variables de entorno
      { expiresIn: '1h' }   // Configura el tiempo de expiración del token según tus necesidades
    );

    // Responde con el token y los datos del usuario
    res.json({ token, message: 'Inicio de sesión exitoso', user });
  } catch (err) {
    console.error('Error al iniciar sesión:', err); // Registra el error para obtener más detalles
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = { register, login };
