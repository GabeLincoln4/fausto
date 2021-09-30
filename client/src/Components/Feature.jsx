import React, {useState} from 'react';
import CoffeeHangOut from "../images/hang-out.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";
import Product from "./Product";
import {Link as ScrollLink} from 'react-scroll';

function Feature(){

    const normalClassName = "bg-yellow-800 flex-grow rounded-3xl shadow-2xl text-white text-2xl transform translate-x-2/3 my-5 p-3";
    const alternateClassName = "bg-yellow-600 flex-grow rounded-3xl shadow-lg text-white text-2xl transform translate-x-2/3 my-5 p-3";

    const [arrowStyle, setArrowStyle] = useState(null);
    const [buttonStyle, setButtonStyle] = useState(normalClassName);

    function handleMouseOver(event){
        setArrowStyle("bg-yellow-600 transform translate-y-0.5");
        setButtonStyle(alternateClassName);
    }

    function handleMouseOut(event){
        setArrowStyle("bg-yellow-800 transform translate-y-0");
        setButtonStyle(normalClassName);
    }


    return (
        <div className="container flex flex-row flex-wrap my-3">
            <h1 className="text-center md:text-left text-6xl leading-tight">Freshly <span className="text-yellow-800">Roasted.</span> Downtown <span className="text-yellow-400">Feel.</span></h1>
            <img className="w-full h-auto mt-2 " src={CoffeeHangOut} alt="coffee-hang-out" />
            <ScrollLink to="menu-section" smooth={true} duration={2000}>
            <button 
                onMouseOut={handleMouseOut} 
                onMouseOver={handleMouseOver} 
                className={buttonStyle}>
                    Explore Fausto!
                    <p 
                        onMouseOut={handleMouseOut} 
                        onMouseOver={handleMouseOver} 
                        className={arrowStyle} 
                    >
                        <KeyboardArrowDownIcon fontSize="large" />
                    </p>
                    
            </button>
            </ScrollLink>
        </div>
    )
}

export default Feature;