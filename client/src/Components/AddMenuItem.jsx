import React, {useState} from 'react';
import axios from 'axios';

function AddMenuItem(){

    const [menuItem, setMenuItem] = useState([{
        chosenPhoto: "",
        chosenTitle: "",
        smlItemPrice: "",
        medItemPrice: "",
        lgItemPrice: ""
    }])

    function handleChange(event){
        const {name, value} = event.target;

        setMenuItem(prevItems => {
            return {
                ...prevItems,
                [name]: value
            }
        })
        console.log("Input value has changed.")
    }

    function handleSubmit(event){
        event.preventDefault();

        const newMenuItem = {
            photo: menuItem.chosenPhoto,
            title: menuItem.chosenTitle,
            smallItemPrice: menuItem.smlItemPrice,
            mediumItemPrice: menuItem.medItemPrice,
            largeItemPrice: menuItem.lgItemPrice
        }

        console.log(newMenuItem);

        axios.post("http://localhost:5000/create-menu-item", newMenuItem);

        console.log(menuItem);
    }

    return (<div>
        <h1>Add Menu Item</h1>
        <form autocomplete="off" onSubmit={handleSubmit}>
            <input 
                value={menuItem.chosenPhoto}
                name="chosenPhoto"
                type="file" 
                accept="image/png, image/jpeg, image/svg+xml"
            />
            <input value={menuItem.chosenTitle} name="chosenTitle" onChange={handleChange} type="text" placeholder="Title" />
            <input value={menuItem.smlItemPrice} name="smlItemPrice" onChange={handleChange} type="text" placeholder="Price For Small Size" />
            <input value={menuItem.medItemPrice} name="medItemPrice" onChange={handleChange} type="text" placeholder="Price For Medium Size" />
            <input value={menuItem.lgItemPrice} name="lgItemPrice" onChange={handleChange} type="text" placeholder="Price For Large Size" />
            <button type="submit">Submit</button>
        </form>
    </div>);
}

export default AddMenuItem;