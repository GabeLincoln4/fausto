import React, { useEffect } from 'react';
import FaustoBuilding from '../images/fausto_building.jpg';
import PhoneCall from '../images/phone_call1.svg';
import AOS from 'aos';

function Lincolnton(){

    useEffect(() => {
        AOS.init({
            duration: 1000,
            startEvent: 'load'
        });
    })

    return (
        <div className="bg-yellow-200">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <img className="md:bg-yellow-700 md:grid md:justify-self-center md:w-full object-cover h-56 w-auto" src="https://charlotteaxios-charlotteagenda.netdna-ssl.com/wp-content/uploads/2016/12/Fausto-Coffee-Lincolnton.jpg" alt="" />
                <div className="bg-yellow-500 font-serif grid place-items-center p-2 text-3xl text-center text-white" data-aos="flip-left">
                    <h1>Where are we?</h1>
                </div>
                <div className="bg-yellow-700 font-serif grid place-items-center p-2 text-2xl text-center text-white" data-aos="flip-right">
                    <h1>116 N.E. Court Square, Lincolnton, NC 28092</h1>
                </div>
                <img className="object-cover object-left h-56 w-auto" src="https://s3-media0.fl.yelpcdn.com/bphoto/ByrulVNYy9nNg4P8Q8ZhEg/l.jpg" alt="" />
                <img className="bg-red-700 object-cover object-left h-56 w-auto md:w-full" src={PhoneCall} alt="Phone Call" />
                <div className="bg-yellow-500 md:bg-yellow-700 font-serif grid place-items-center p-2 text-3xl text-center text-white" data-aos="flip-left">
                    <h1>Got Questions? Please give us a call!</h1>
                    <h2>(704) 240-4950</h2>
                </div>
                <div className="bg-yellow-700 md:bg-yellow-500 font-serif grid p-2 place-items-center text-2xl text-center text-white" data-aos="flip-right">
                    <h1>Delicious Taste and Meaningful Conversations Await!</h1>
                </div>
                <img className="object-cover object-right-top h-56 w-auto" src="https://asset---north-carolina.bldg15.net/img/6/a/6affb6a7-ff07-4533-82cb-023085d398f8/Fausto%20Coffee-fit(1000,600).bcf3d325.jpg" alt="" />
            </div>
        </div>
    );
}

export default Lincolnton;
