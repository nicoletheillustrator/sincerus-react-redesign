import React from "react"; 
import imgown from '../images/ownerimg.jpg'
import json from '../data/owner.json' 
import aboutjson from '../data/about/about.json'

function About() {

   const style = {
        backgroundImage: `url("${imgown}")`
    }
    return(
        <div className="about">
            <div className="about-wrap">
                 <h2>About Us</h2>
                 <p>We are located in <span style={{fontWeight: "bold",}}>{aboutjson.location}</span></p>
                 <div className="quick-about">
                    <div className="owner-img" style={style}>
                    </div>
                 </div>
                 <p>{aboutjson.name}</p>
                 <p>{aboutjson.description}<br></br><br></br>{aboutjson.health}</p>

            </div>
        </div>
    )
}

export default About;