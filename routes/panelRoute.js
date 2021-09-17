const express = require('express');
const router = express.Router();
const Panel = require('../models/panelModel.js');

router.route("/create-panel").post((req, res) => {
    const photoUrl = req.body.photo;
    const title = req.body.title;
    
    const newPanel = new Panel({
        photoUrl,
        title
    });

    newPanel.save();
});

router.route("/panels").get((req, res) => {
    Panel.find()
        .then(foundPanels => res.json(foundPanels));
})
module.exports = router;