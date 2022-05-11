import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer(){
    return (
        <div className="bg-yellow-600">
            <div className="flex justify-between text-white p-3">
                <div className="font-bold">
                    Fausto Coffee
                </div>
                <div>
                    <a href="https://www.facebook.com/BelieveinbetterCOFFEE/"><FacebookIcon /></a>
                    <EmailIcon />
                </div>
            </div>
            <div className="p-3 text-xs text-white font-bold">Attributions:</div>
            <ul className="pl-3 pb-2 text-xs font-bold text-white">
                <li><a href="https://www.freepik.com/vectors/people-city">People city vector created by pch.vector - www.freepik.com</a></li>
                <li><a href="https://www.freepik.com/vectors/restaurant-cartoon">Restaurant cartoon vector created by upklyak - www.freepik.com</a></li>
                <li><a href="https://www.freepik.com/photos/cocktail-bar">Cocktail bar photo created by azerbaijan_stockers - www.freepik.com</a></li>
                <li>Photo by Kaboompics.com from Pexels</li>
            </ul>
        </div>
        
    );
}

export default Footer;