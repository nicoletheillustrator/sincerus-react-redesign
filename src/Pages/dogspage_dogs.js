import React, { createRef, useRef, useState } from "react";
import Footer from "../components/footer";
import Dogcard from "../components/dogcard";
import Data from "../data/dogcarddata";
import DogProfile from "./components/dogprofile";



function DogPageDogs() {

    const [itemID, setItemID] = useState(0);
    const itemRef = useRef()
    const card = Data.map(item => {

     
        return (
            
        <Dogcard
        data={item}  
        key={item.id}  
        onClick={()=> {
            setItemID(item)
            itemRef.current.classList.add("open-dogprofile")
            console.log(itemID)
        }}

        />)
    })



    return(
            <div className="ourdogs">
                    <div className="header">
                        <p>Dogs <span className="makesmall">✦</span></p>
                    </div>
                    
                    <div className="container-wrap">
              
                      {card}
                </div>

            <DogProfile msg={itemID} ref={itemRef}/>
                <Footer />
            </div>
    )
};


export default DogPageDogs;