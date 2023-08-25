const responseHelper = require("../helpers/responseHelper");
const Category = require("../models/Categories");

const addCategory = async (req, res) => {
  if (req.user) {
    const data = req.body;

    const category = await Category.find({
      name: data.name,
    });

    if (category && category.length >= 1) {
      responseHelper.error(res, "Categoria ya existe");
    } else {
      const categoryData = await Category.create(data);
      responseHelper.success(res, categoryData);
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const getAllCategories = async (req, res) => {
  if (req.user) {
    const categories = await Category.find({});

    if (categories && categories.length > 0) {
      responseHelper.success(res, categories);
    } else {
      responseHelper.error(res, "Información no disponible");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const updateCategory = async (req, res) => {
  if (req.user) {
    const data = req.body;
    const catId = req.params["id"];

    const category = await Category.findByIdAndUpdate(
      {
        _id: catId,
      },
      {
        name: data.name,
        description: data.description,
      },
      {
        new: true,
      }
    );

    if (category && Object.keys(category).length > 0) {
      responseHelper.success(res, category);
    } else {
      responseHelper.error(res, "Categoria no encontrada");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const findCategoryById = async (req, res) => {
  if (req.user) {
    const catId = req.params["id"];

    const category = await Category.findById({ _id: catId });

    if (category && Object.keys(category).length > 0) {
      responseHelper.success(res, category);
    } else {
      responseHelper.error(res, "Categoria no encontrada");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const deleteCategory = async (req, res) => {
  if (req.user) {
    const catId = req.params["id"];

    const category = await Category.findByIdAndDelete({ _id: catId });

    if (category && Object.keys(category).length > 0) {
      responseHelper.success(res, category);
    } else {
      responseHelper.error(res, "Categoria no encontrada");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
  findCategoryById,
  deleteCategory
};
