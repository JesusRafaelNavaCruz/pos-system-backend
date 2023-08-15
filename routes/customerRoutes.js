const express = require("express");
const customerController = require("../controller/customerController");

const api = express.Router();

api.post("/", customerController.addCustomer);

module.exports = api;