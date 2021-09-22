import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";
import CoffeeHangOut from "../images/hang-out.svg"

function Feature(){
        return (
            <div className="container mx-auto md:grid md:grid-cols-2 md:gap-10">
                <h1 className="my-4 md:py-36 text-center md:text-left text-5xl md:text-7xl">Freshly <span className="text-yellow-800">Roasted.</span> Downtown <span className="text-yellow-400">Feel.</span></h1>
                <img className="w-full h-auto my-4 sm:py-36 md:py-6" src={CoffeeHangOut} alt="coffee-hang-out" />
            </div>
        )
}

export default Feature;