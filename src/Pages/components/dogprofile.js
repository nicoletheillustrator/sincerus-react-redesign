import React, { useEffect, useRef, useState } from "react";


const DogProfile = React.forwardRef((props, ref) => {

const closePage = () => {
    ref.current.classList.remove("open-dogprofile")
}

//Some dogs may not have accomplishments, this is a boolean check on wether to include box03 or not. Display none or Visibility?
const box03 = useRef()
const hasAccomplishment = props.msg.hasAccomplished

useEffect(() => {
    if (hasAccomplishment === true) {
        box03.current.style.display = 'block'
    } 
    else {
        box03.current.style.display = 'none'
    };  
})

const style = {
    backgroundImage: `url("${props.msg.dogBanner}")`
}

    return(
        <>
     
           
            <div className="dogprofile" ref={ref}>
                <div className="header" style={style}>
                    <p>{props.msg.dogTitle}</p>
                    <p>"{props.msg.dogName}"</p>
                </div>
            <div>
                <h2>Date of Birth</h2>
                <p>{props.msg.dob}</p>
            </div>



                    <div className="grid-layout">
            
                        <div className="box01 grid-col-span">
                            <h3>Health Checks</h3>
                            <div className="hc-box">
                                <ul>
                                <li className="bold-li">Hip Test:<p className="-result">{props.msg.dogTestHip}</p></li>
                                <li className="bold-li">Elbow Test:<p className="-result">  {props.msg.dogTestElbows}</p></li>
                                <li className="bold-li">Eye Test:<p className="-result">  {props.msg.dogTestEye}</p></li>
                                <li className="bold-li">Thyroid Test:<span className="-result">  {props.msg.dogTestThyroid}</span></li>
                                <li className="bold-li">Heart Test:<p className="-result">{props.msg.
                                
                                dogTestHeart}</p></li>
                                </ul>
                                <a href="https://ofa.org/advanced-search/?appnum=2128905" target="_blank"><button>See more on OFA</button></a>
                            </div>

                            
                        </div>

                        <div className="box02">
                            <ul>
                                <li className="bold-li">Dam:<p>{props.msg.dogDam}</p></li>
                                <li className="bold-li">Sire:<p>{props.msg.dogSire}</p></li>
                            </ul>
                        </div>

                        <div className="box03" ref={box03}>
                            <h3>Accomplishments</h3>
                        </div>

                        <div className="box04">
                        <button>pedigree</button>
                        <button className="button" onClick={closePage}>back to dogs</button>
                    </div>
            </div>

          
        </div>
       
        
        </>
    )
});

export default DogProfile;