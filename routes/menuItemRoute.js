const express = require('express');
const router = express.Router();
const MenuItem = require("../models/menuItemModel.js");

router.route("/create-menu-item").post((req, res) => {
    const photo = req.body.photo;
    const title = req.body.title;
    const smallItemPrice = req.body.smallItemPrice;
    const mediumItemPrice = req.body.mediumItemPrice;
    const largeItemPrice = req.body.largeItemPrice;

    const newMenuItem = new MenuItem({
        photo,
        title,
        smallItemPrice,
        mediumItemPrice,
        largeItemPrice
    });

    newMenuItem.save();
})

module.exports = router;