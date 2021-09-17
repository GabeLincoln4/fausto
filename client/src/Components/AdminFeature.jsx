import axios from 'axios';
import React, {useState} from 'react';
import Header from './Header.jsx';

function AdminFeature(){

    const [userFeature, setUserFeature] = useState({
        userPic: "",
        userHeading: ""
    });

    function handlePicChange(event){
        setUserFeature({
            userHeading: event.target.value
        });
    }

    function handleHeadingChange(event){
        setUserFeature({
            userPic: event.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post({
            method: 'post',
            url: "http://localhost:5000/add",
            data: {
                photo: userFeature.userPic
            }
        })
            .then(function(res){
                console.log(res.data)
            })
    }

    
    return (
        <div>
            <Header />
            <section class="admin-feature-section">
            <h1 class="section-title">Administrator Feature Assignment</h1>
            <form class="form-signin" method="post" enctype="application/x-www-form-urlencoded" onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label class="feature-label col-sm-2 col-form-label-lg">Photo:</label>
                    <input 
                        onChange={handlePicChange}
                        class="form-control col-sm-10" 
                        value={userFeature.userPic}
                        name="userPhoto"
                        type="text" 
                        placeholder="Paste photo url here">
                    </input>
                </div>
                {/* <div class="form-group row">
                    <label class="feature-label col-sm-2 col-form-label-lg">Feature Title: </label>
                    <input 
                        onChange={handleHeadingChange}
                        class="form-control col-sm-10" 
                        value={userFeature.userHeading} 
                        name="userTitle"  
                        type="text" 
                        placeholder="Type the title of the feature here" 
                    />
                </div> */}
                
                <button class="btn btn-lg submit-btn">Submit</button>
            </form>
            </section>
        </div>
    );
}

export default AdminFeature;