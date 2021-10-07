import React, {useEffect} from 'react';
import Event from '../images/event.svg';
import HotBeverage from '../images/hot_beverage.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services(){

    useEffect(()=>{
        AOS.init({
            duration: 1500,
            startEvent: 'load'
        });
    }, []);
    

    const headingStyle="font-serif text-3xl mb-2";
    const subheadingStyle="text-lg font-sans";
    const imgStyle="overflow-hidden shadow-xl";

    return (
        <div className="bg-yellow-500 pb-4 pt-12">
            <div className="flex jusitfy-start">
                <div data-aos="fade-in" className="bg-yellow-700 text-right text-white leading-loose mb-5 px-3 py-2 w-11/12">
                    <h1 className={headingStyle}>Are You A Local Artist?</h1>
                    <p className={subheadingStyle}>Display and Sell Your Art in the Coffee Shop!</p>
                </div>
            </div>
            <div className={"transform -translate-x-1/3 overflow-hidden shadow-xl" + {imgStyle}}>
                <img src="https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwZGlzcGxheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" data-aos="zoom-in" />
            </div>
            <div className="flex justify-end my-5">
                <div data-aos="fade-in" className="bg-yellow-700 px-3 py-2 text-white w-11/12">
                    <h1 className={headingStyle}>Need a Place to Gather?</h1>
                    <p className={subheadingStyle}>Look No Further. Our Space is Avaible to Rent for any Type of Event!</p>
                </div>
            </div>
            <div className="flex justify-end my-5 px-2">
                <div className={"w-3/4 h-auto" + {imgStyle}}>
                    <img src={Event} alt="event happening" data-aos="zoom-in" />
                </div>
            </div>
            <div className="flex justify-start my-5" >
                <div className="bg-yellow-700 px-3 py-2 text-right text-white w-11/12" data-aos="fade-in">
                    <h1 className={headingStyle}>Or We Can Come To You!</h1>
                    <p className={subheadingStyle}>Fausto Offers Top of the Line Catering to Spice Up Your Event!</p>
                </div>
            </div>
            <div className="flex justify-start my-5 px-2">
                <div className={"w-3/4 h-auto" + {imgStyle}}>
                    <img src={HotBeverage} alt="hot beverage" data-aos="zoom-in" />
                </div>
            </div>
            <div className="flex justify-end">
                <div data-aos="fade-right" className="w-1/2 bg-yellow-700 font-serif p-2 mt-3 text-xl text-white">
                    <h1 className="font-semibold">Start Here:</h1>
                    <p>(828)289-6735</p>
                </div>
            </div>
        </div>
    );
}

export default Services;