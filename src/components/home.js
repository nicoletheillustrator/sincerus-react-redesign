import React from "react";

import About from "./about";
import BannerContact from "./contactbanner";
import Footer from "./footer";
import Header from "./header";


function Home() {
    return (
    <div>

       <Header/>
        <About />
        <BannerContact />
        <Footer />
    </div>
    )
};

export default Home;