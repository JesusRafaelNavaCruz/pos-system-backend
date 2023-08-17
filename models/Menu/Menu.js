const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = Schema({
    name: {
        type: String,        
        require: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
    }],
});

module.exports = mongoose.model("Menu", MenuSchema)