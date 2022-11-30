import React, { useEffect, useRef, useState } from "react";


const DogProfile = React.forwardRef((props, ref) => {

const closePage = () => {
    ref.current.classList.remove("open-dogprofile")
}
    return(
        <>
     
           
            <div className="dogprofile" ref={ref} >
                <div className="header">
                    <p>{props.msg.dogTitle}</p>
                    <p>"{props.msg.dogAKA}"</p>
                </div>
            <div>
                <h2>Date of Birth</h2>
                <p>{props.msg.dogDOB}</p>
            </div>
            <div className="grid-layout">
           
                <div className="box01 grid-col-span">
                    <h3>Health Checks</h3>
                    <ul>
                    <li className="bold-li">Hip Test:<p className="-result">{props.msg.dogTestHip}</p></li>
                    <li className="bold-li">Elbow Test:<p className="-result">  {props.msg.dogTestElbows}</p></li>
                    <li className="bold-li">Eye Test:<p className="-result">  {props.msg.dogTestEye}</p></li>
                    <li className="bold-li">Thyroid Test:<span className="-result">  {props.msg.dogTestThyroid}</span></li>
                    <li className="bold-li">Heart Test:<p className="-result">{props.msg.dogTestHeart}</p></li>
                    </ul>
                </div>
                <div className="box02">
                    <ul>
                        <li className="bold-li">Dame:<p>{props.msg.dogDame}</p></li>
                        <li className="bold-li">Sire:<p>{props.msg.dogSire}</p></li>
                    </ul>
                </div>
                <div>
                <button>database</button>
                <button className="button" onClick={closePage}>back to dogs</button>
            </div>
       </div>

          
        </div>
       
        
        </>
    )
});

export default DogProfile;