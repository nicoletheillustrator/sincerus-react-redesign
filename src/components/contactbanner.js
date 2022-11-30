import React, {useRef} from "react";
import Contact from "./contact";

function BannerContact() {
    
    const contactref = useRef()
    const hideref = useRef()

    //Opens contact
    function openContactPage() {
        contactref.current.classList.add("open-contactpanel")
        hideref.current.style.display = "none" //Just hides the X button from the OG contact. Don't need it for this paticular way to access contact page. // 
    }
    //closes contact
    function closeAll() {
        contactref.current.classList.remove("open-contactpanel")
    }
   
    return (
        <>
        <div className="banner">
            <div className="banner-wrap">
                <p>	✦<br></br>Get to know more about our kennel.</p>
                <button onClick={openContactPage}>contact</button>
            </div>
        </div>

        <Contact contactref={contactref} hideref={hideref} functionBack = {closeAll}/>
        </>
    )
}

export default BannerContact;