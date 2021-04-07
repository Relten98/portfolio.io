// Basic importations.
import React from "react";
import "./style.css";

// This is what makes those fancy SCHMANCY images on the bottom.
function LowerText() {
    return (
        <div id="invisible" className="bg-text2">
            <a href="https://github.com/Relten98">
                <img className="github" id="linkBtn" type="image" src="photos\developer\github-icon.svg" /></a>

            <a id="invisible" href="https://www.linkedin.com/in/ty-diezhandino-257a93208/">
                <img className="linkedin" id="linkBtn" type="image" src="photos\developer\linkedin-icon.svg" /></a>
        </div>
    );
}

export default LowerText;