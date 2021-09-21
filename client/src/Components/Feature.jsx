import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";
import CoffeeHangOut from "../images/hang-out.svg"

function Feature(){
    return (<div className="relative grid md:grid-cols-2 grid-cols-1 container mx-auto py-5">
        <div className="flex">
        <h1 className="text-center md:text-left text-5xl md:text-7xl">Freshly Roasted. Downtown Feel.</h1>
        </div>
        <img className="w-full h-auto mt-3 md:flex-shrink-0" src={CoffeeHangOut} alt="coffee-hang-out" />
    </div>)
}

export default Feature;