import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";
import CoffeeHangOut from "../images/hang-out.svg"

function Feature(){
    return (<div className="grid grid-cols-2 container mx-auto py-5">
        <h1>Test</h1>
        <img className="w-full h-auto" src={CoffeeHangOut} alt="coffee-hang-out" />
    </div>)
}

export default Feature;