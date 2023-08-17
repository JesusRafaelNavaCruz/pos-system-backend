const Users = require("../models/Users");

const addUser = async (req, res) => {
  const data = req.body;

  const users = await Users.find({
    email: data.email,
  });

  if (users && users.length >= 1) {
    res.status(400).send({
      data: [],
      message: "Correo electrónico ya existe",
    });
  } else {
    data.password = data.email;
    const userData = await Users.create(data);
    res.status(201).send({
      data: userData,
      message: "Usuario creado correctamente",
    });
  }
};

const getAllUsers = async (req, res) => {
  const users = await Users.find({});

  if (users && users.length > 0) {
    res.status(200).send({
      data: users,
      message: "Consulta éxitosa",
    });
  } else {
    res.status(404).send({
      message: "Información no disponible",
    });
  }
};

module.exports = {
  testing,
  getAllUsers,
  addUser,
};
