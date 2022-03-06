import React from "react";
import Header from "./Header.jsx";
import Feature from "./Feature.jsx";
import Roaster from "./Roaster.jsx";
import Lincolnton from "./Lincolnton.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from './Footer.jsx';
import Services from './Services.jsx';

function Home(){
    return (
        <div>
            <Header />
            <Feature />
            <Services />
            <Roaster />
            <Lincolnton />
            <Footer />
        </div>
    );
}

export default Home;