import React from "react";
import "./Header.css"
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Header(props) {
    return(
        <div className="Header">
            <LeftBar />
            <RightBar />
        </div>
    )
}

export default Header