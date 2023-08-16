const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,        
    },
    price: {
        type: Number,
        required: true,
    },
    availiable: {
        type: Boolean,
        default: true,
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Categories",
        required: true,
    }],
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
