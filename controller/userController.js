const bcrypt = require("bcrypt");
const jwt = require("../helpers/jwt");
const Users = require("../models/Users");
const responseHelper = require("../helpers/responseHelper");
const saltRounds = 10;

const signin = async (req, res) => {
  const data = req.body;

  const users = await Users.find({
    email: data.email,
  });

  if (users && users.length >= 1) {
    bcrypt.compare(data.password, users[0].password, async (err, check) => {
      if (check) {
        const payload = {
          access_token: jwt.generateToken(users[0]),
          user: users[0],
        };
        responseHelper.success(res, payload);
      } else {
        responseHelper.error(res, "Wrong password");
      }
    });
  } else {
    responseHelper.error(res, "Correo electrónico y/o contraseña incorrectos");
  }
};

const addUser = async (req, res) => {
  const data = req.body;

  const users = await Users.find({
    email: data.email,
  });

  if (users && users.length >= 1) {
    responseHelper.error(res, "Correo electrónico ya existe");
  } else {
    bcrypt.genSalt(saltRounds, async (err, salt) => {
      bcrypt.hash(data.password, salt, async (err, hash) => {
        if (err) {
          responseHelper.error(res, "Error al encriptar contraseña");
        } else {
          data.password = hash;
          const userData = await Users.create(data);
          responseHelper.success(res, {
            data: userData,
          });
        }
      });
    });
  }
};

const getAllUsers = async (req, res) => {
  if (req.user) {
    const users = await Users.find({});

    if (users && users.length > 0) {
      responseHelper.success(res, users);
    } else {
      responseHelper.error(res, "Información no disponible");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const updateUser = async (req, res) => {
  if (req.user) {
    const data = req.body;
    const usrId = req.params["id"];

    const user = await Users.findByIdAndUpdate(
      { _id: usrId },
      {
        name: data.name,
        firstLastName: data.firstLastName,
        secondLastName: data.secondLastName,
        role: data.role,
        email: data.email,
      },
      { new: true }
    );

    if (user && Object.keys(user).length > 0) {
      responseHelper.success(res, user);
    } else {
      responseHelper.error(res, "Usuario no encontrado");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const findUserById = async (req, res) => {
  if (req.user) {
    const usrId = req.params["id"];

    const user = await Users.findById({ _id: usrId });

    if (user && Object.keys(user).length > 0) {
      responseHelper.success(res, user);
    } else {
      responseHelper.error(res, "Usuario no encontrado");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

const deleteUser = async (req, res) => {
  if (req.user) {
    const usrId = req.params["id"];

    const user = await Users.findByIdAndDelete({ _id: usrId });

    if (user && Object.keys(user).length > 0) {
      responseHelper.success(res, user);
    } else {
      responseHelper.error(res, "Usuario no encontrado");
    }
  } else {
    responseHelper.error(res, "Token inválido");
  }
};

module.exports = {
  getAllUsers,
  addUser,
  signin,
  updateUser,
  findUserById,
  deleteUser
};
