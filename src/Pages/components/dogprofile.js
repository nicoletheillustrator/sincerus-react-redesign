import React, { useEffect, useRef, useState} from "react";


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



//Some parent dogs may have photo or pedigree available, this is a boolean check on wether to include a button to take users there>>
const sireIs = useRef()
const damIs = useRef()
const hasSirePedigree = props.msg.hasSirePedigree
const hasDamPedigree = props.msg.hasDamPedigree

useEffect(() => {
    if (hasSirePedigree === true) {
        sireIs.current.style.display = 'block'
    } 
    else {
        sireIs.current.style.display = 'none'
    };  

    if (hasDamPedigree === true) {
        damIs.current.style.display = 'block'
    } 
    else {
        damIs.current.style.display = 'none'
    };  
})


const style = {
    backgroundImage: `url("${props.msg.dogBanner}")`
}
//To keep the accomplished list to each dog. In the parent set state is to an empty array then upon the click of the profile button on the dogs page, the state is given per index. Below maps the items, if there is, to an array.
const listedItems = props.listed.map((item, i)=>

<li key={i}><p>{item}</p></li>
)

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
                            <li><p><span className="bold-li">Sire: </span>{props.msg.dogSire}</p>
                                <a href={props.msg.sireLink} target="_blank">
                                    <button ref={sireIs}><i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </a>
                            </li>
                            <li><p><span className="bold-li">Dam: </span>{props.msg.dogDam}</p>
                                <a href={props.msg.damLink} target="_blank">
                                    <button ref={damIs}><i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </a>

                            </li>
                            </ul>
                        </div>

                        <div className="box03" ref={box03}>
                            <h3>Accomplishments</h3>
                            <ul>
                                {listedItems}
                            </ul>
                        </div>

                        <div className="box04">
                        <a href={props.msg.vdLink}><button className="colorbutton">pedigree</button></a>
                        <button className="button" onClick={closePage}>back to dogs</button>
                    </div>
            </div>

          
        </div>
       
        
        </>
    )
});

export default DogProfile;