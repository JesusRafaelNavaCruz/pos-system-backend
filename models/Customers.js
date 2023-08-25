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
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
  address: {
    street: { 
      type: String 
    },
    city: { 
      type: String 
    },
    state: { 
      type: String 
    },
    zipCode: { 
      type: String 
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Customers", CustomersSchema);
