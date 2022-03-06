import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer(){
    return (
        <div className="bg-yellow-300 flex justify-between text-white p-3">
            <div className="font-bold">
                Fausto Coffee
            </div>
            <div>
                <a href="https://www.facebook.com/BelieveinbetterCOFFEE/"><FacebookIcon /></a>
                <EmailIcon />
            </div>
        </div>
    );
}

export default Footer;