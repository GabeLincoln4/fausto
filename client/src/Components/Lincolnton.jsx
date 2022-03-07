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
                <img className="md:bg-yellow-700 md:grid md:justify-self-center md:w-full object-cover h-56 w-auto" src="https://img.freepik.com/free-vector/waitress-carrying-takeaway-coffee-customers-outdoor-cafe_74855-11185.jpg" alt="" />
                <div className="bg-yellow-500 font-serif grid place-items-center p-2 text-3xl text-center text-white" data-aos="flip-left">
                    <h1>Where are we?</h1>
                </div>
                <div className="bg-yellow-700 font-serif grid place-items-center p-2 text-2xl text-center text-white" data-aos="flip-right">
                    <h1>116 N.E. Court Square, Lincolnton, NC 28092</h1>
                </div>
                <img className="object-cover object-left h-56 w-auto" src="https://img.freepik.com/free-vector/cafe-interior-with-coffee-machine-cashier-desk-refrigerator-chalkboard-menu-tables-with-couches-bar-chairs_107791-3398.jpg?w=1380" alt="" />
                <img className="bg-red-700 object-cover object-left h-56 w-auto md:w-full" src={PhoneCall} alt="Phone Call" />
                <div className="bg-yellow-500 md:bg-yellow-700 font-serif grid place-items-center p-2 text-3xl text-center text-white" data-aos="flip-left">
                    <h1>Got Questions? Please give us a call!</h1>
                    <h2>(704) 240-4950</h2>
                </div>
                <div className="bg-yellow-700 md:bg-yellow-500 font-serif grid p-2 place-items-center text-2xl text-center text-white" data-aos="flip-right">
                    <h1>Delicious Taste and Meaningful Conversations Await!</h1>
                </div>
                <img className="object-cover object-left h-56 w-full" src="https://img.freepik.com/free-photo/cup-coffee-with-foam-grains-aside_114579-20061.jpg?w=1380" alt="" />
            </div>
        </div>
    );
}

export default Lincolnton;
