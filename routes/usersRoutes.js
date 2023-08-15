const express = require("express");
const userController = require('../controller/userController');

const api = express.Router();

api.get("/testing", userController.testing);
api.get("/", userController.getAllUsers);
api.post("/", userController.addUser);

module.exports = api;