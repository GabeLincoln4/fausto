import React from 'react';
import CoffeeToGo from '../images/coffee-cup.png';


function Item(){
    return(
        <div className="w-3/4 h-auto bg-yellow-100 mx-auto my-3 p-4 rounded-3xl shadow-xl">
                <img className="w-44 h-auto mx-auto mb-3 transform rotate-12" src={CoffeeToGo} alt="Coffee Cup" />
                <div className="bg-yellow-500 inline-block p-2 rounded-xl">
                    <h1 className="text-white text-4xl font-semibold py-2">Coffee</h1>
                </div>
                <div className="text-black text-right text-2xl mt-2 font-medium">
                    <p>Small: $0.99</p>
                    <p>Medium: $1.25</p>
                    <p>Large: $2.00</p>
                </div>
        </div>
    );
}

export default Item;