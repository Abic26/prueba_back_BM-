const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Definir rutas CRUD
router.get("/", getAllUsers);        // Obtener todos los usuarios
router.get("/:id", getUserById);     // Obtener un usuario por ID
router.post("/", createUser);        // Crear un nuevo usuario
router.put("/:id", updateUser);      // Actualizar un usuario existente por ID
router.delete("/:id", deleteUser);   // Eliminar un usuario por ID

module.exports = router;
