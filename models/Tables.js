const mongoose = require("mongoose");
const TableSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["AVAILABLE", "OCCUPIED", "RESERVED", "CLEANING"],
    default: "AVAILABLE",
  },
  tableType: {
    type: String,
  },
  lastCleaningTime: {
    type: Date,
  },
  notes: {
    type: String,
  },
  reservations: [
    {
      customerName: {
        type: String,
        required: true,
      },
      customerContact: {
        phoneNumber: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
      reservationTime: Date,
    },
  ],
  location: {
    type: String,
  },
  orderHistory: [
    {
      orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
      },
      orderDate: Date,
    },
  ],
});

module.exports = mongoose.model("Table", TableSchema);
