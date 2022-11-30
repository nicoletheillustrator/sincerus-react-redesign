import React, { useRef } from "react";

import Contact from "./contact";


function Menu(props, ref) {

    // Refs for accessing DOM//
    const cat = React.useRef()
    const subcat = React.useRef() //May want to pass through useEffect for more intrusive codes.

  
    //Closes menu and changes the state of Active to false
    function closeMenu() {
        props.menuRef.current.classList.remove("menu-active")
        props.setActive(false)
    };

    //Opening contact page
    const contactref = useRef()
    function openContactPanel() {
        contactref.current.classList.add("open-contactpanel")

        //also resets the subcategory upon opening
        subcat.current.classList.remove("subcat-show")
    }
    //Closing contact page to menu
    function backToMenu() {
        contactref.current.classList.remove("open-contactpanel")
    }
    //Resets contact page and closes menu 
    function closeAll() {
        props.menuRef.current.classList.remove("menu-active")
        subcat.current.classList.remove("subcat-show")
        props.setActive(false)
        contactref.current.classList.remove("open-contactpanel")
    }

    return(
        <div>
            <div className="menu" ref={props.menuRef} >
                <div className="menu-wrap" >
                <div className="btn-wrap"><i className="fa-solid fa-xmark" onClick={closeMenu}></i></div>
                    <ul className="cat-wrap" ref={cat}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/ourdogs">Our Dogs</a></li>
                        <li onClick={openContactPanel}>Contact Us</li>
                        <li><a href="_blank">Vizsla Database</a></li>
                    </ul>
                   
                </div>
            </div>

            <Contact contactref={contactref} functionBack={backToMenu} functionCloseAll={closeAll}/>
        </div>
    )
}

export default Menu;