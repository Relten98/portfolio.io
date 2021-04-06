import React from "react";
import "./style.css";
import Subnav from "../Subnav"

function MainBody() {
    return (
    <div className="bg-text">
            {Subnav}
            <h1>- Ty Diezhandino -</h1>
                <p>Web Developer - Level Designer</p>
                {Subnav}
                 </div>
    );
}

export default MainBody;
