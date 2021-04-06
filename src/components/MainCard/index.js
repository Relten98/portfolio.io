import React from "react";
import LowerText from "../LowerText";
import MainBody from "../MainBody";
import "./style.css";

function MainCard () {
    return (
<div className="MainCard">
{Subnav}
    {MainBody}
    <br />
    {LowerText}
</div>
    );
}

export default MainCard;