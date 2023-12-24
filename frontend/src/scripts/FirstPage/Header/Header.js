import React from "react";
import "./Header.css"
import LeftBar from "./LeftBar";
import CentralBar from "./CentralBar";
import RightBar from "./RightBar";

function Header(props) {
    return(
        <div className="Header">
            <LeftBar />
            <CentralBar />
            <RightBar />
        </div>
    )
}

export default Header