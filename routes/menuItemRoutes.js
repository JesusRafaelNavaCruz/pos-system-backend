const express = require("express");
const menuItemController = require("../controller/menuItemController");
const auth = require("../middleware/auth");

const api = express.Router();

api.get("/", auth, menuItemController.getAllMenuItems);
api.get("/:id", auth, menuItemController.findMenuItemById);
api.post("/", auth, menuItemController.addMenuItem);
api.put("/:id", auth, menuItemController.updateMenuItem);
api.delete("/:id", auth, menuItemController.deleteMenuItem);

module.exports = api;
