const express = require("express");
const menuController = require("../controller/menuController");
const auth = require("../middleware/auth");

const api = express.Router();

api.get("/", auth, menuController.getAllMenus);
api.get("/:id", auth, menuController.findMenuById);
api.post("/", auth, menuController.addMenu);
api.put("/:id", auth, menuController.updateMenu);
api.delete("/:id", auth, menuController.deleteMenu);

module.exports = api;
