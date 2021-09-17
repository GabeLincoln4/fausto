import React, {useState, useEffect} from "react";


function SeasonalItem(props){
    const [photoItems, setPhotoItems] = useState([]);

    useEffect(function(){
        fetch("/features/").then(function(res){
            if (res.ok){
                return res.json()
            }
        }).then(function(jsonRes){
            setPhotoItems(jsonRes.featureList)
        })
    })

    return(
        <div class={props.className}>
          <img 
            class="d-block w-100 feature-photo" 
            src={props.pic} 
            alt="Second slide" />
          <div class="carousel-caption d-inline">
            {/* <h5>First slide label</h5> */}
            <h1 class="feature-descript">{props.description}</h1>
          </div>
        </div>
    );
}

export default SeasonalItem;