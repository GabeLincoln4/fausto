import axios from 'axios';
import React, {useState} from 'react';
import Header from './Header.jsx';

function AdminFeature(){

    const [feature, setFeature] = useState([{
        userPhoto: '',
        userTitle: '',
    }])

    function handleChange(event){
        const {name, value} = event.target;

        setFeature(prevFeatures => {
            return {
                ...prevFeatures,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(feature);

        const newPanel = {
            photo: feature.userPhoto,
            title: feature.userTitle
        }

        console.log(newPanel);
        
        axios.post("http://localhost:5000/create-panel", newPanel);
    }
    
    return (
        <div>
            <Header />
            <section class="admin-feature-section">
            <h1 class="section-title">Administrator Feature Assignment</h1>
            <form class="form-signin" method="post" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded">
                <div class="form-group row">
                    <label class="feature-label col-sm-2 col-form-label-lg">Photo:</label>
                    <input 
                        onChange={handleChange}
                        class="form-control col-sm-10" 
                        value={feature.photo}
                        name="userPhoto"
                        type="text" 
                        placeholder="Paste photo url here">
                    </input>
                </div>
                <div class="form-group row">
                    <label class="feature-label col-sm-2 col-form-label-lg">Feature Title: </label>
                    <input 
                        onChange={handleChange}
                        class="form-control col-sm-10" 
                        value={feature.title} 
                        name="userTitle"  
                        type="text" 
                        placeholder="Type the title of the feature here" 
                    />
                </div>
                
                <button class="btn btn-lg submit-btn" type="submit">Submit</button>
            </form>
            </section>
        </div>
    );
}

export default AdminFeature;