import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";


function Feature(){
    const [features, setFeatures] = useState([{
        photoUrl: '',
        title: ''
    }]);
    const [carouselClass, setCarouselClass] = useState("carousel-item active");

    useEffect(() => {
        fetch("/panels")
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(jsonRes => setFeatures(jsonRes))
    })

    function handleNextButtonClick(){
        setCarouselClass("carousel-item");
    }

    return (
    <div>
        <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img 
                        class="d-block w-100 feature-photo" 
                        src="https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="Second slide" />
                    <div class="carousel-caption d-inline">
                        {/* <h5>First slide label</h5> */}
                        <h1 class="feature-descript">Welcome to the Fausto Website!</h1>
                    </div>
                </div>
                    <div>
                        {features.map(function(feature){
                            return (<div class="carousel-item">
                                <SeasonalItem pic={feature.photoUrl} description={feature.title} />
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next feature-next-btn"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
            >
                <span onClick={handleNextButtonClick} class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>)
}

export default Feature;