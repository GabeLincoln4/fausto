const express = require('express');
const router = express.Router();
testRoute = require("../controllers/testController");

router.get("/test", testRoute.testController);

module.exports = router;