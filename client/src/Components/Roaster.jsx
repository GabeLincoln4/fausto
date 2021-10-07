import React, {useState, useEffect} from "react"
import {Spring} from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Roaster(){

    useEffect(()=>{
        AOS.init({
            duration: 1500,
            startEvent: 'load'
        });
    }, []);

    const originalStyle = "my-5 w-full h-auto mx-auto transform -translate-x-5 -translate-y-7";

    return (
        <div className="bg-yellow-100 pb-4">
            <h1 className="capitalize font-semibold font-serif py-4 px-4 text-3xl text-center text-black">Beans are prepared <span className="font-bold text-yellow-700">in house</span> for amazing results</h1>
            <div className="bg-yellow-700 w-3/4 h-auto mx-auto" data-aos="fade-up">
                <img className={originalStyle} src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="coffee roaster" id="roaster" />
            </div>
        </div>
    );
}

export default Roaster;