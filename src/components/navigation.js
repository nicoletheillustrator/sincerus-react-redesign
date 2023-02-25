import React, { useRef, useState} from "react";
import Menu from "./menu";

import png2 from "../data/icons/doghead.png"

function Navigation() {
  const  navopen = "fa-solid fa-bars"
  const menuRef = useRef()

    const [active, setActive] = useState(false)

function openMenu() {
    console.log("busy")
    menuRef.current.classList.add("menu-active")
    setActive(true)
  }

const svgstyle = {
    width: 32
}

    return (
        <nav>
            <div className="nav-wrap">
            <img src={png2} style={svgstyle}></img>
                <i className={navopen} onClick={openMenu} ></i>
                <ul className="menu-ml list-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/ourdogs">Our Dogs</a></li>
                    <li><a href="https://www.vizsladatabase.com/results.php?keyword=sincerus&mode=simple" target="_blank">Vizsla Database</a></li>
                </ul>
            </div>

            <Menu menuRef={menuRef} setActive={setActive} active={active}/>
        </nav>
    )
}

export default Navigation;