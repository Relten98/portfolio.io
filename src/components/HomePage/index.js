import React from "react";

import '../style.css';

// Component imports
import LowerText from "../LowerText";
import MainBody from "../MainBody";
import Subnav from "../Subnav";
import BgImage from "../BgImage";

// Style sheet for whatever is left here.
import "./style.css";

function HomePage () {
    return (
<div className="MainCard">
{BgImage}
{Subnav}
    {MainBody}
    <br />
    {LowerText}
</div>
    );
}

export default HomePage;