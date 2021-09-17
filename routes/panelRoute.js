const express = require('express');
const router = express.Router();
const Panel = require('../models/panelModel.js');

router.route("/create-panel").post((req, res) => {
    const photoUrl = req.body.photo;
    const title = req.body.title;
    
    console.log(photoUrl);
    
    const newPanel = new Panel({
        photoUrl,
        title
    });

    newPanel.save();
});

module.exports = router;