import React from "react";
import headjson from "../data/headlines/mainhead.json"
function Header() {

    // bgImage = {
    //     backgroundImage: `url("${headjson.image}")`
    // }
    return(
        <div className="header">
            <div className="header-wrap">
                <h1>Sincerus</h1>
                <h2>{headjson.description}</h2>
                <p>{headjson.quote}<br></br>✦</p>
                
            </div>
        </div>
    )
}

export default Header;