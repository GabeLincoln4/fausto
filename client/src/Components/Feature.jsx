import React, {useState, useEffect} from "react";
import SeasonalItem from "./SeasonalItem.jsx";


function Feature(){
    const [features, setFeatures] = useState([]);
    const [carouselClass, setCarouselClass] = useState("");

    useEffect(function(){
        fetch("/features/").then(function(res){
            if(res.ok){
                return res.json()
            }
        }).then(function(jsonRes){
            setFeatures(jsonRes.featureList)
        })
    })

    function handleNextClick(){
        console.log("button clicked");
        setCarouselClass("carousel-item");
    }

    return (<div>
        <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 feature-photo" src={"https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="First slide" />
                    <div class="carousel-caption d-inline">
                        {/* <h5>First slide label</h5> */}
                        <h1 class="feature-descript">Good 'Ol Cup'O'Joe</h1>
                    </div>
                </div>
                {features.map(function(feature){
                    return (<div class="carousel-item">
                        <SeasonalItem pic={feature.photo} description={feature.title}/>
                    </div>)
                })}
                
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
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
            >
                <span onClick={handleNextClick} class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>)
}

export default Feature;