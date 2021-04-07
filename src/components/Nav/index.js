import React from "react";
import "../styles.css";

function Nav() {
    return(
<nav id="navDeco" className="navbar navbar-dark">
    <a id="homeBtn" className="nav-link" href="portfolio.html"> Portfolio </a>
    <a id="homeBtn" className="nav-link"
        href="https://docs.google.com/document/d/1pSLCrWx9qbomW0smhjbBsi8hIFYjjcLBnxQvuqALdMc/edit?usp=sharing"> Resume </a>
        <a id="homeBtn" className="nav-link" href="contact.html">Contact me! </a>
    </nav>
    ); 
}

export default Nav;