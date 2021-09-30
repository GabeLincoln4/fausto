import React from "react";
import Header from "./Header.jsx";
import Feature from "./Feature.jsx";
import Testimonial from "./Testimonial";
import Product from "./Product.jsx";
import {BrowserRouter, Route} from "react-router-dom";

function Home(){
    return (
        <div>
            <Header />
            <Feature />
            <Product />
        </div>
    );
}

export default Home;