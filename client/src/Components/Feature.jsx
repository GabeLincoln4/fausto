import React, {useState, useEffect} from 'react';
import CoffeeHangOut from "../images/hang-out.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";
import ProductList from "./ProductList";
import {Link as ScrollLink} from 'react-scroll';
import AOS from 'aos';

function Feature(){

    useEffect(() => {
        AOS.init({
            duration: 3000,
            startEvent: 'load'
        });
    })

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
        <div className="bg-yellow-100 h-screen container flex flex-row flex-wrap pt-20">
            <div data-aos="zoom-in">
                <h1 className="text-center md:text-left text-6xl leading-tight">Freshly <span className="text-yellow-800">Roasted.</span> Downtown <span className="text-yellow-400">Feel.</span></h1>
                <img className="w-full h-auto mt-2 " src={CoffeeHangOut} alt="coffee-hang-out" />
                <ScrollLink to="services" smooth={true} duration={2000}>
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
                            <KeyboardArrowDownIcon fontSize="large" id="services" />
                        </p> 
                </button>
                </ScrollLink>
            </div>
        </div>
    )
}

export default Feature;