const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
  tableNumber: {
    type: Number,
    require: true,
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderItem",
  }],
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
