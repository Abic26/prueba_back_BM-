const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: role || "employee"
    });

    res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({ token, message: "Usuario inicio", user });
  } catch (err) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

module.exports = { register, login };
