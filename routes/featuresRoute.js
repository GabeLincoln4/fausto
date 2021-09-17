const express = require("express");
const router = express.Router();
featuresRoute = require("../controllers/featuresController.js");

router.get("/features/", featuresRoute.featuresController);



module.exports = router;