import React, { useEffect } from "react";

const Dogcard = (props) => {

//reand
    return (
        <>
        <div className="dogcard">
            <div className="img-box"></div>
            <div className="info-box">
                <p>{props.data.dogTitle}</p>
                <button onClick={props.onClick}>
                    Profile</button>
            </div>
        </div>
        <hr></hr>

        </>
    )
}

export default Dogcard;