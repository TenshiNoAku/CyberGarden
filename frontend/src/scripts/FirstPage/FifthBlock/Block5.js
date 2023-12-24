import React from "react";
import "./Bl5.css"
import BgVideo from "./Video.mp4"

function Block5() {
    return(
        <div className="Block5Styles">
            <video src={BgVideo} autoPlay loop className="video5"/>
            <p className="Block5Txt">ОБЕЗЛИЧЬ ЭТО!</p>
        </div>
    )
}

export default Block5