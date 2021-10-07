import React from 'react';
import Item from "./Item.jsx";

function ProductList(){
    return (
    <div id="menu-section">
        <div className="p-10 bg-yellow-500 md:grid grid-cols-3">
            <h1 className="font-semibold mb-5 mt-5 text-7xl text-center text-yellow-100">Menu</h1>
            <Item />
            <Item />
        </div>
    </div>);
}

export default ProductList;

