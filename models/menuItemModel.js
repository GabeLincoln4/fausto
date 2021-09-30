const mongoose = require('mongoose');

const menuItemSchema = {
    photo: String,
    title: String,
    smallItemPrice: String,
    mediumItemPrice: String,
    largeItemPrice: String
}

const MenuItem = mongoose.model('menuItem', menuItemSchema);

module.exports = MenuItem;