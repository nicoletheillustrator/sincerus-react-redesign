import React from "react";
import json from "../data/about/about.json";

 function Footer() {
    return(
        <footer>
            <div className="footer-grid-wrap">
              <a className="i-01" href="/">Home</a>
              <a className="i-02">About</a>
              <a className="i-03" href="/ourdogs">Our Dogs</a>
             <a className="i-04" href="https://www.vizsladatabase.com/results.php?keyword=sincerus&mode=simple" target="_blank">Vizsla Database</a>
              <span className="i-05">
                <a href="https://www.facebook.com/kelly.park.121"><i className="fa-brands fa-facebook" target="_blank" ></i></a>
                <p>{json.footerQuick}
                </p>
              </span>
              
            </div>
        </footer>
    )
 }

 export default Footer;