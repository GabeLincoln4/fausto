import React, {useState, useEffect} from 'react';
import CoffeeHangOut from "../images/hang-out.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom";

import {Link as ScrollLink} from 'react-scroll';
import AOS from 'aos';


function Feature(){

    useEffect(() => {
        AOS.init({
            duration: 1000,
            startEvent: 'load'
        });
    }, [])

    const normalClassName = "bg-yellow-800 flex-grow rounded-3xl shadow-2xl text-white text-2xl md:transform md:translate-x-0 my-5 p-2 md:w-3/4";
    const alternateClassName = "bg-yellow-500 flex-grow rounded-3xl shadow-lg text-white text-2xl md:transform md:translate-x-0 my-5 p-2 md:w-3/4";

    const [arrowStyle, setArrowStyle] = useState(null);
    const [buttonStyle, setButtonStyle] = useState(normalClassName);

    function handleMouseOver(event){
        setArrowStyle("bg-yellow-500 transform translate-y-0.5");
        setButtonStyle(alternateClassName);
    }

    function handleMouseOut(event){
        setArrowStyle("bg-yellow-800 transform translate-y-0");
        setButtonStyle(normalClassName);
    }


    return (
        <div className="bg-yellow-100 h-full" id="home">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 p-20" data-aos="zoom-in">
                        <div className="md:p-4 text-center md:self-end h-2/3">
                            <h1 className="md:text-left text-6xl md:text-7xl leading-tight">Freshly <span className="text-yellow-800" whileHover="text-white">Roasted. </span>Downtown <span className="text-yellow-400">Feel.</span></h1>
                        </div>
                        <img className="w-64 h-auto m-2 mx-auto  sm:w-3/4 md:w-full md:p-3 mt-5 md:row-span-2 order-2" src={CoffeeHangOut} alt="coffee-hang-out" />
                        <div className="justify-self-center md:justify-self-start order-3 md:p-4 md:self-end md:w-full">
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
                    
                    {/* <div className="md:flex md:justify-start md:w-1/3 md:flex-col">
                       
                    </div> */}
            </div>
        </div>
    )
}

export default Feature;