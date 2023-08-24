const express = require("express");
const userController = require('../controller/userController');
const auth = require('../middleware/auth');

const api = express.Router();

api.get("/", auth, userController.getAllUsers);
api.post("/", userController.addUser);
api.put("/:id", auth, userController.updateUser);
api.get("/:id", auth, userController.findUserById);
api.delete("/:id", auth, userController.deleteUser);
api.post("/signin", userController.signin)

module.exports = api;