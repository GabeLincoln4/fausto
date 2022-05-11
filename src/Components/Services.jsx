import React, {useEffect} from 'react';
import Event from '../images/event.svg';
import HotBeverage from '../images/hot_beverage.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceItem from './ServiceItem';

function Services(){

    useEffect(()=>{
        AOS.init({
            duration: 1500,
            startEvent: 'load'
        });
    }, []);
    

    const headingStyle="font-serif text-3xl md:text-5xl mb-2";
    const subheadingStyle="text-lg md:text-2xl font-sans";
    const imgStyle="md:grid justify-self-end w-11/12";
    const midStyle="md:flex-none";
    const gridTextStyle="bg-yellow-700 p-3 my-3 w-11/12 md:w-full md:h-3/4 md:grid md:place-self-center md:place-items-center text-right text-white"
    const headingTextStyle="md:flex md:mb-10 mb-3 text-3xl md:text-6xl md:text-center"
    const paragraphTextStyle="text-xl md:text-3xl md:text-center md:w-3/4"


    return (
        <div className="bg-yellow-200">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5" id="services">
                <ServiceItem order=" md:order-1"/>
                <div className={imgStyle + " md:order-2"}>
                    <img className="" src="https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwZGlzcGxheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" data-aos="zoom-in" />
                </div>
                <div className={gridTextStyle + " md:order-4"} data-aos="fade-in">
                    <h1 className={headingTextStyle}>Need a Place to Gather?</h1>
                    <p className={paragraphTextStyle}>Look No Further. Our Space is Avaible to Rent for any Type of Event!</p> 
                </div>
                <div className={imgStyle + " md:order-3"}>
                    <img className="p-5" src={Event} alt="event happening" data-aos="zoom-in" />
                </div>
                <div className={gridTextStyle + " md:order-5"} data-aos="fade-in" >
                        <h1 className={headingTextStyle}>Or We Can Come To You!</h1>
                        <p className={paragraphTextStyle}>Fausto Offers Top of the Line Catering to Spice Up Your Event!</p>
                </div>
                <div className={imgStyle + " md:order-6"}>
                    <img className="p-5" src={HotBeverage} alt="hot beverage" data-aos="zoom-in" />
                </div>
                <div className="bg-yellow-700 justify-self-end p-2 my-3 w-1/3 md:order-7" data-aos="fade-right">
                    <div className="text-white text-xl">
                        <h1 className="font-semibold">Start Here:</h1>
                        <p>(828) 289-6735</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;