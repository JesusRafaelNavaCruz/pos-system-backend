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

const OrderSchema = Schema({
  tableNumber: {
    type: Number,
    require: true,
  },
  items: [OrderItemSchema],
  total: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "COMPLETED"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
