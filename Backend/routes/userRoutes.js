const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../authMiddleware");

// Routes
router.post("/", userController.createUser);
router.post("/login", userController.login); // Add login route
router.get("/", authMiddleware, userController.getUsers); // Apply authMiddleware
router.get("/:id", authMiddleware, userController.getUserById); // Apply authMiddleware
router.put("/:id", authMiddleware, userController.updateUser); // Apply authMiddleware
router.delete("/:id", authMiddleware, userController.deleteUser); // Apply authMiddleware

module.exports = router;
