const responseHelper = require("../helpers/responseHelper");
const Menu = require("../models/Menu/Menu");

const addMenu = async (req, res) => {
  try {
    const data = req.body;

    const isMenu = await Menu.findOne({ name: data.name });
    if (isMenu) {
      return responseHelper.error(res, "Menu ya existe");
    }

    const newMenu = await Menu.create(data);
    responseHelper.success(res, newMenu);
  } catch (err) {
    responseHelper.error(res, error);
  }
};

const findMenuById = async (req, res) => {
  try {
    const menuId = req.params.id;

    const menu = await Menu.findById(menuId);

    if (!menu) {
      return responseHelper.error(res, "No existe el menú");
    }

    responseHelper.success(res, menu);
  } catch (err) {
    responseHelper.error(res, error);
  }
};

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find({});

    if (menus.length > 0) {
      responseHelper.success(res, menus);
    } else {
      responseHelper.error(res, "Recurso no encontrado");
    }
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const updateMenu = async (req, res) => {
  try {
    const data = req.body;
    const menuId = req.params.id;

    const menu = await Menu.findByIdAndUpdate(
      { _id: menuId },
      {
        name: data.name,
        items: data.items,
      },
      { new: true }
    );
    responseHelper.success(res, menu);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;

    const menu = await Menu.findByIdAndDelete({ _id: menuId });
    responseHelper.success(res, menu);
  } catch (error) {
    responseHelper.error(res, error);
  }
};

module.exports = {
  addMenu,
  findMenuById,
  getAllMenus,
  updateMenu,
  deleteMenu,
};
