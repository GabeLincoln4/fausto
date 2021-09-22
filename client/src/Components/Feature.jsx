import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";
import CoffeeHangOut from "../images/hang-out.svg"

function Feature(){
        return (
            <div className="container mx-auto h-screen md:grid md:grid-cols-2 md:gap-10">
                <div className="md:flex items-center">
                    <h1 className="my-4 text-center md:text-left text-5xl md:text-7xl">Freshly <span className="text-yellow-800">Roasted.</span> Downtown <span className="text-yellow-400">Feel.</span></h1>
                </div>
                <img className="w-full h-auto my-4 sm:py-36 md:py-6" src={CoffeeHangOut} alt="coffee-hang-out" />
            </div>
        )
}

export default Feature;