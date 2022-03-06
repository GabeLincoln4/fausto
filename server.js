const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin-gabriel:xiqW75HDDMmoRhiK@cluster0.n51sy.mongodb.net/panelsDB");

//require route
app.use("/", require("./routes/featuresRoute.js"));
app.use("/", require("./routes/panelRoute.js"));
app.use("/", require("./routes/menuItemRoute.js"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function(){
    console.log("Server has started successfully");
});
