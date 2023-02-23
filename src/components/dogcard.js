import React, { useEffect } from "react";

const Dogcard = (props) => {

const style = {
    backgroundImage: `url(${props.data.dogProfileImg})`
}


    return (
        <>
        <div className="dogcard">
            <div className="img-box" style={style}></div>
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

