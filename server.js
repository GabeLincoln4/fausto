const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin-gabriel:<password>@cluster0.n51sy.mongodb.net/panelsDB");

//require route
app.use("/", require("./routes/featuresRoute.js"));
app.use("/", require("./routes/panelRoute.js"));



app.listen(5000, function(){
    console.log("Server is running at port 5000");
});
