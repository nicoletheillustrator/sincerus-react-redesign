import React from "react";
import headjson from "../data/headlines/mainhead.json"
function Header() {

    const bgImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.252), rgba(0, 0, 0, 0.252)), url("${headjson.image}")`
    }
    return(
        <div className="header" style={bgImage}>
            <div className="header-wrap">
                <h1>Sincerus</h1>
                <h2>{headjson.description}</h2>
                <p>{headjson.quote}<br></br>✦</p>
                
            </div>
        </div>
    )
}

export default Header;