import React from "react";
import Test from "../client/src/Components/Test.jsx";

exports.testController = function(req, res){
    res.render(<Test />)
}