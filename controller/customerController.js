const Customers = require("../models/Customers");

const addCustomer = async (req, res) => {
  const data = req.body;

  const customers = await Customers.find({
    email: data.email,
  });

  if (customers && customers.length >= 1) {
    res.status(400).send({
      data: [],
      message: "Correo electrónico ya existe",
    });
  } else {
    const customerData = await Customers.create(data);
    res.status(201).send({
      data: customerData,
      message: "Usuario creado correctamente",
    });
  }
};

module.exports = {
    addCustomer,
}
