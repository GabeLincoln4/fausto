import React from 'react';

function ServiceItem(props){

    const gridTextStyle="bg-yellow-700 p-3 my-3 w-11/12 md:w-full md:h-3/4 md:grid md:place-self-center md:place-items-center text-right text-white"
    const headingTextStyle="md:flex md:mb-10 mb-3 text-3xl md:text-4xl lg:text-6xl md:text-center"
    const paragraphTextStyle="text-xl md:text-2xl lg:text-3xl md:text-center md:w-3/4"


    return(
        <div>
            <div className={gridTextStyle + props.order} data-aos="fade-in">
                <h1 className={headingTextStyle}>Are You A Local Artist?</h1>
                <p className={paragraphTextStyle}>Display and Sell Your Art in the Coffee Shop!</p>
            </div>
        </div>
    );
}

export default ServiceItem;