import React, { createRef, useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import Dogcard from "../components/dogcard";
import Data from "../data/dogs/alldogs.json";
import DogProfile from "./components/dogprofile";



function DogPage() {
    const [itemID, setItemID] = useState("nta");
    const itemRef = useRef()
    const alldog = Data.allDogs
    const info = alldog
    const [isList, setIsList] = useState([0])



    const card = info.map((item, i) => {
        return (
        <Dogcard
        data={item}  
        key={i}  
        onClick={()=> {
            setItemID(item)
            itemRef.current.classList.add("open-dogprofile")
                itemRef.current.scrollTo({
                    top: 1,
                    behavior: 'smooth',
                })

            setIsList(item.accomplished)
        }}
        />)
        
    })



    return(
            <div className="ourdogs">
                    <div className="header">
                        <p>Meet the <br></br>family<span className="makesmall">✦</span></p>
                    </div>
                    
                    <div className="container-wrap">
              
                      {card}
                </div>

            <DogProfile msg={itemID} ref={itemRef} listed={isList}/>
                <Footer />
            </div>
    )
};


export default DogPage;