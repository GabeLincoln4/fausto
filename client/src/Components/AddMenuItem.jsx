import React, {useState} from 'react';

function AddMenuItem(){

    // const {name, value} = event.target;
    const [menuItems, setMenuItems] = useState([{
        photo: "",
        title: "",
        smallItemPrice: "",
        mediumItemPrice: "",
        largeItemPrice: ""
    }])

    function handleChange(event){
        console.log("Input value has changed.")
    }

    return (<div>
        <h1>Add Menu Item</h1>
        <form>
            <input 
                type="file" 
                accept="image/png, image/jpeg, image/svg+xml"
            />
            <input onChange={handleChange} type="text" placeholder="Title" />
            <input onChange={handleChange} type="text" placeholder="Price For Small Size" />
            <input onChange={handleChange} type="text" placeholder="Price For Medium Size" />
            <input onChange={handleChange} type="text" placeholder="Price For Large Size" />
            <button type="submit"></button>
        </form>
    </div>);
}

export default AddMenuItem;