const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderItemSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
