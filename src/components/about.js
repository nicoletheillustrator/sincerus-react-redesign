import React from "react"; 
import imgown from '../images/ownerimg.jpg'
import json from '../data/owner.json' 
function About() {

   const style = {
        backgroundImage: `url("${imgown}")`
    }
    return(
        <div className="about">
            <div className="about-wrap">
                 <h2>About Us</h2>
                 <p>We are located in <span style={{fontWeight: "bold",}}>{json.location}</span></p>
                 <div className="quick-about">
                    <div className="owner-img" style={style}>
                    </div>
                 </div>
                 <p>{json.name}</p>
                 <p>{json.about}<br></br><br></br>{json.health}</p>

            </div>
        </div>
    )
}

export default About;