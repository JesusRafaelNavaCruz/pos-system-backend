const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomersSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  firstLastName: {
    type: String,
    require: true,
  },
  secondLastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: false,
  },
  lastVisit: {
    type: Date,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Customers", CustomersSchema);