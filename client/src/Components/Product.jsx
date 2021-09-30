import React from 'react';
import CoffeeToGo from '../images/coffee-cup.png';


function Product(){
    return (
    <div id="menu-section">
        <h1></h1>
        <div className="p-10 bg-yellow-100 md:grid grid-cols-3">
            <div className="bg-yellow-500 p-4 rounded-3xl">
                <img className="w-60 h-auto mx-auto mb-3 transform rotate-12" src={CoffeeToGo} alt="Coffee Cup" />
                <div className="bg-yellow-600 inline-block p-2 rounded-xl">
                    <h1 className="text-white text-5xl font-semibold py-2">Coffee</h1>
                </div>
                <div className="text-white text-right text-2xl mt-2 font-medium">
                    <p>Small: $0.99</p>
                    <p>Medium: $1.25</p>
                    <p>Large: $2.00</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Product;

