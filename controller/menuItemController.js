const responseHelper = require("../helpers/responseHelper");
const MenuItem = require("../models/Menu/MenuItem");

const addMenuItem = async (req, res) => {
  try {
    const data = req.body;
    const isMenu = await MenuItem.findOne({ name: data.name });
    if (isMenu) {
      return responseHelper.error(res, "MenuItem ya existe");
    }

    const newMenuItem = await MenuItem.create(data);
    responseHelper.success(res, newMenuItem);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const findMenuItemById = async (req, res) => {
  try {
    const menuItemId = req.params.id;

    const menuItem = await MenuItem.findById(menuItemId);

    if (!menuItemId) {
      return responseHelper.error(res, "No existe el MenuItem");
    }
    responseHelper.success(res, menuItem);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({});

    if (menuItems.length > 0) {
      responseHelper.success(res, menuItems);
    } else {
      responseHelper.error(res, "Recurso no encontrado");
    }
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const data = req.body;
    const menuItemId = req.params.id;

    const menuItem = await MenuItem.findByIdAndUpdate(
      { _id: menuItemId },
      {
        name: data.name,
        description: data.description,
        price: data.price,
        availiable: data.availiable,
        category: data.category,
      },
      { new: true }
    );
    responseHelper.success(res, menuItem);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const menuItem = await MenuItem.findByIdAndDelete({ _id: menuItemId });
    responseHelper.success(res, menuItem);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

module.exports = {
  addMenuItem,
  findMenuItemById,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
};
