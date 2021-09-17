import React from "react";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Link} from "react-router-dom";

function Testimonial(){

    let testimonialStr = "You know what? It is beets. I've crashed into a beet truck. Must go faster. Did he just throw my cat out of the window? Must go faster. I was part of something special. I gave it a cold? I gave it a virus. A computer virus. Must go faster... go, go, go, go, go! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Jaguar shark! So tell me - does it really exist? God help us, we're in the hands of engineers. Hey, you know how I'm, like, always trying to save the planet? Here's my chance."

    return <div class="testimonial">
        <section class="testimonial-section">
            <div class="container">
                <h1 class="testimonial-heading">NAME</h1>
                <div class="row">
                    <div class="col-sm">
                        <img class="testimonial-pic" src="https://images.pexels.com/photos/6948164/pexels-photo-6948164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>   
                    <div class="col-lg">        
                        <p class="testimonial-quote">
                            <FormatQuoteIcon fontSize="large" />
                            {testimonialStr.substring(0, 100)}<p class="read-more-link">...<a>Read More</a></p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Testimonial;