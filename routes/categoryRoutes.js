const express = require("express");
const categoryController = require("../controller/categoryController");
const auth = require("../middleware/auth");

const api = express.Router();

api.get("/", auth, categoryController.getAllCategories);
api.get("/:id", auth, categoryController.findCategoryById);
api.post("/", auth, categoryController.addCategory);
api.put("/:id", auth, categoryController.updateCategory);
api.delete("/:id", auth, categoryController.deleteCategory);

module.exports = api;